import { ScrapController } from "./controllers/ScrapController";
import express, { Request, Response } from 'express'
import cors from 'cors'

const scrapController = new ScrapController()

class Server {
  private port = 3333
  private baseUrl = '/api/v1'
  private app: express.Application

  constructor(private srapController: ScrapController) {
    this.app = express()

    this.config()
  }

  private config() {
    this.app.set('port', this.port)
    this.app.use(cors())
    this.app.use(express.json())

    this.routes()
  }

  private routes() {
    this.app.use(this.baseUrl, this.srapController.router)

    this.app.get('/', (req: Request, res: Response) => {
      res.json({ message: 'Scrap api :D' })
    })
  }

  public start() {
    this.app.listen(this.app.get('port') || 3333, () => {
      console.log(`Server running ir port ${this.app.get('port')}`)
    })
  }
}

const server = new Server(scrapController)

server.start()