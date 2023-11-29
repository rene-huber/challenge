import {linksData} from "../utils/links"

export default function Links() {
  return (
    <div>
      {linksData.map((link) => {
        const {url, text } = link
        return (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        )
      })}
    </div>
  )

       
}

