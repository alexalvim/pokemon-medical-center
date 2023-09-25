import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { PageSummary } from '.'
import { light } from '../../styles/themes/light'

describe('PageSummary', () => {
  it('should render component correctly', () => {
    const props = {
      title: 'Test title',
      subtitle: 'Test subtitle',
    }
    render(
      <ThemeProvider theme={light}>
        <PageSummary {...props} />
      </ThemeProvider>,
    )
    const homeText = screen.getByText('Home')
    const bannerTitle = screen.getAllByText(props.title)
    const bannerSubtitle = screen.getByText(props.subtitle)

    expect(homeText).toBeInTheDocument()
    expect(bannerTitle.length).toBe(2)
    expect(bannerSubtitle).toBeInTheDocument()
  })
})
