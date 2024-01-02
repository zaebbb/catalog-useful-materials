export interface FooterItem {
  link: string
  content: string
}

export interface FooterBlock {
  title: string
  items: FooterItem[]
}

export interface UseFooterItemsResult {
  siteBlock: FooterBlock
  userBlock: FooterBlock
}
