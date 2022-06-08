// Conexión a base de datos
import mongoose from "mongoose"

const uri = 'mongodb://localhost:27017'

export async function startConnection() {
  await mongoose.connect(uri)
  console.log('Database is connected')
}