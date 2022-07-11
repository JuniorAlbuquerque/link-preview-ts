import { parseHtml } from "../../utils/parseHtml";
import { getPreviewData } from "../../utils/previewTags";
import { getPageContent } from "../../utils/scrap";
import { Response, Request, Router } from "express";

export class ScrapController {
  public router: Router

  constructor() {
    this.router = Router()
    this.routes()
  }

  private index = async (req: Request, res: Response) => {
    const { url } = req.query

    try {
      const pageContent = await getPageContent(url as string)
      const html = parseHtml(pageContent)
      const tags = getPreviewData(html)
      
      res.json(tags)
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: 'Erro ao carregar informações da url solicitada',
        error
      })
    }
  }

  public routes() {
    this.router.get('/scrap', this.index)
  }
}