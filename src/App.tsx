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
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button color='info'>Info</Button>
        <Button color='error'>Error</Button>
        <Link href="#">link example</Link>
      </div>
      <Heading variant='h1'>Title Heading 1</Heading>
      <Heading color='secondary' variant='h1'>Title Heading 1</Heading>
      <Heading variant='h2'>Title Heading 2</Heading>
      <Heading color='secondary' variant='h2'>Title Heading 2</Heading>
      <Heading variant='h3'>Title Heading 3</Heading>
      <Heading color='secondary' variant='h3'>Title Heading 3</Heading>
      <Heading variant='h4'>Title Heading 4</Heading>
      <Heading color='secondary' variant='h4'>Title Heading 4</Heading>
      <Heading variant='h5'>Title Heading 5</Heading>
      <Heading color='secondary' variant='h5'>Title Heading 5</Heading>
      <Heading variant='h6'>Title Heading 6</Heading>
      <Heading color='secondary' variant='h6'>Title Heading 6</Heading>
      <Paragraph>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph color='secondary'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph color='success'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph color='warning'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph color='info'>
        This is a sample paragraph to demonstrate the current theme styling. Switch between light and dark themes using the toggle above.
      </Paragraph>
      <Paragraph color='error'>
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
