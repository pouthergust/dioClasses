import { URLModel } from './../database/model/URL';
import { config } from '../config/Constants';
import {Request, Response} from 'express';
import shortId from 'shortid';

export class URLController {
  public async shortner(req: Request, res: Response): Promise<void> {
    // Verificar existencia da URL
    const { originURL } = req.body
    const url = await URLModel.findOne({ originURL })

    if (url) {
      res.json(url)
      return
    }
    // Criar o hash para URL
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`
    // Salvar URL no banco
    const newURL = await URLModel.create({hash, shortURL, originURL})
    // Retornar URL 
    res.json(newURL)
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    // pegar o hash da URL
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash })

    if (url) {
      res.redirect(url.originURL);
      return
    }

    res.status(400).json({ error:'URL not found' });

    // Encontrar a URL original pelo hash
    // const url = {
    //   originURl: 'https://cloud.mongodb.com/v2/61d59b26830315633aa7ef94#clusters/connect?clusterId=Cluster0',
    //   hash: 'QugtVHAKz',
    //   shortURL: 'http://localhost:3000/QugtVHAKz'
    // }
    // Redirecionar para original a partir dos dados do BD
  }
}
