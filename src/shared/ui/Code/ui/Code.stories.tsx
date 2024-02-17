import type { Meta, StoryObj } from '@storybook/react'
import Code from './CodeComponent'

const codeJs = `<pre class="language-javascript">
<code>
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 * Reach Lea at fake@email.com (no, not really)
 * And this is a Markdown link. Sweet, huh?
 */
export const isEmptyObject = (object: object): boolean =&gt; {
  const filterObject = Object
    .fromEntries(Object
      .entries(object)
      .filter(
        ([_, value]) =&gt; Boolean(value)
      )
    )

  return Boolean(!Object.keys(filterObject).length)
}
</code></pre>`

const codeCss = `<pre class="language-css">
<code>
:root {
  // purple-color
  --purple-color-80: #6028E0;
  --purple-color-70: #733DF2;
  --purple-color-60: #8352FA;
  --purple-color-50: #A079FC;
  --purple-color-40: #BFA9F3;
  --purple-color-30: #DED0FE;
  --purple-color-20: #E9E1FD;
  --purple-color-10: #F5F1FD;
}
</code></pre>`

const meta: Meta<typeof Code> = {
  title: 'ui-kit/Code',
  component: Code,
  tags: ['autodocs'],
  args: {
    code: codeJs,
  },
}

export default meta
type Story = StoryObj<typeof Code>

export const Primary: Story = {}
export const PrimaryCSS: Story = {
  args: {
    code: codeCss,
  },
}
