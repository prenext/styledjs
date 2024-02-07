# TODO List for My UI Framework

This document outlines the planned features and structure for My UI Framework.

## UI Structure Hierarchy

1. **App Component:**
   - Inserts the theme for the entire application.
   - Only accepts a single child component of type `StyledApp`.

2. **StyledApp Component:**
   - Only accepts `Page` components as children.
   - Throws an error if any other component is inserted.

3. **Page Component:**
   - Accepts various components such as `AppBar`, `Content`, `Sections`, and `Footer`.
   - Props:
     - `useParentFooter` (boolean): Determines whether to use the parent's footer.
     - `useMasterAppBar` (boolean): Determines whether to use the master page's appbar.
     - `customizeMaster` (object): Customize the parent master's theme.

4. **Content, Sections, Footer Components:**
   - Components that can be inserted inside the `Page` component.

## Page Component Customization

- Pages can set `useMaster` to `false` to define their own appbar or footer.
- Pages can customize the parent master's theme using `customizeMaster` prop.
- Setting `useMaster` to `false` allows pages to define their own appbar or footer.

## Master Page

- If a page is set as master (`useMaster: true`), its appbar and footer can be used by other pages.

## Example Usage:

```jsx
// Example of App component usage
import { App, StyledApp, Page, AppBar, Content, Footer } from 'my-ui-framework';

function MyApp() {
  return (
    <App>
      <StyledApp>
        <Page useMasterAppBar={true}>
          <AppBar title="Home" />
          <Content>
            {/* Content components */}
          </Content>
          <Footer useParentFooter={true} />
        </Page>

        <Page useMasterAppBar={true} useParentFooter={false} customizeMaster={{ backgroundColor: 'blue' }}>
          <AppBar title="About" />
          <Content>
            {/* Content components */}
          </Content>
          <Footer>
            {/* Custom Footer */}
          </Footer>
        </Page>
      </StyledApp>
    </App>
  );
}
```