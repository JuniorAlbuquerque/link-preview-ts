import { parseHtml } from "@app/utils/parseHtml";
import { getPreviewData } from "@app/utils/previewTags";
import { getPageContent } from "@app/utils/scrap";
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
      res.status(500).json({
        message: 'Erro ao carregar informações da url solicitada'
      })
    }
  }

  public routes() {
    this.router.get('/scrap', this.index)
  }
}