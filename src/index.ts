import type * as Hast from 'hast'
import type { Transformer } from 'unified'
import { visit } from 'unist-util-visit'

export function withListsWithAriaRole(): Transformer<Hast.Root> {
  const transformer: Transformer<Hast.Root> = function transformer(tree, _file) {
    visit(tree, 'element', function onElement(node) {
      if (node.tagName !== 'ul' && node.tagName !== 'ol') return

      node.properties = node.properties || {}
      node.properties['role'] = 'list'
    })
  }

  return transformer
}
