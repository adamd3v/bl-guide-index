import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"

const TagsButton: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    let path = baseDir + "/tags/";
    return <a href={path}>Browse Tags</a>
}

export default (() => TagsButton) satisfies QuartzComponentConstructor
