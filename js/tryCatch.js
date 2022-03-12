class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = "Gabriel"
    const myError = new CustomError({
        message: 'custom message',
        data: {
            type: 'Server error'
        }
    })
    throw myError;
    // console.log(name);
} catch (err) {
    console.log(err)
    console.log(err.data);
} finally {
    console.log('Keeping going...')
}