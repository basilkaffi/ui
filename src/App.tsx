import { useState } from 'react';
import { ThemeProvider, useTheme } from './theme/context';
import { lightTheme, darkTheme } from './config';
import { Switch, Button, Heading, Paragraph, Small, Link } from './components';

function InnerApp() {
  const { applyTheme } = useTheme();

  const [isLight, setIsLight] = useState(false);

  function toggleTheme(next: boolean) {
    setIsLight(next);
    applyTheme(next ? lightTheme : darkTheme);
  }

  return (
    <div style={{ padding: '20px' }}>
        <Switch checked={isLight} onChange={toggleTheme} label={`${isLight ? 'Light' : 'Dark'} Theme`} />
      <hr />
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Switch />
        <Button>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='success'>Success</Button>
        <Button variant='warning'>Warning</Button>
        <Button variant='info'>Info</Button>
        <Button variant='error'>Error</Button>
        <Link href="#">link example</Link>
      </div>
      <Heading>Title Heading 1</Heading>
      <Heading variant='secondary'>Title Heading 1</Heading>
      <Heading type='h2'>Title Heading 2</Heading>
      <Heading variant='secondary' type='h2'>Title Heading 2</Heading>
      <Heading type='h3'>Title Heading 3</Heading>
      <Heading variant='secondary' type='h3'>Title Heading 3</Heading>
      <Heading type='h4'>Title Heading 4</Heading>
      <Heading variant='secondary' type='h4'>Title Heading 4</Heading>
      <Heading type='h5'>Title Heading 5</Heading>
      <Heading variant='secondary' type='h5'>Title Heading 5</Heading>
      <Heading type='h6'>Title Heading 6</Heading>
      <Heading variant='secondary' type='h6'>Title Heading 6</Heading>
      <Paragraph>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph variant='secondary'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph variant='success'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph variant='warning'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph variant='info'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph variant='error'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Small>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Small>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
}

export default App;
