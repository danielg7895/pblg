import mongoose from 'mongoose'

const connectDatabase = async () => {

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
        
        console.log(`CONECTADO A MONGO: ${db.connection.host}`.brightBlue.bold)
    } catch (error) {
        console.log(`ERROR AL CONECTAR A MONGO ${error.message}`.brightRed.bold)
    }
    
}

export default connectDatabase