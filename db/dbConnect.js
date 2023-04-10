import mongoose from "mongoose"

mongoose.set('strictQuery', false)

const dbConnect = async () =>
  mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Connected!'))
    .catch((error) => console.log(`Unabled to connect: ${error}`))

const db = mongoose.connection    

export { dbConnect, db }