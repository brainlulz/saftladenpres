// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  S,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#fdffff',
    secondary: '#37718e',
    tertiary: '#c33c54',
    quaternary: '#ffbf00',
    green: '#50ffb1',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  owasplogo: require('./assets/owasplogo.png'),
  alexlab: require('./assets/alexlab.png'),
  categories: require('./assets/categories.png'),
  juiceshoplogo: require('./assets/JuiceShop_Logo.png'),
  bjorn: require('./assets/Bjorn_Avatar_400px.png'),
  architecture: require('./assets/architecture-diagram.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <span role="img" aria-label="warning">
              ⚠️ Frontend security vulnerabilities ⚠️
            </span>
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            <span role="img" aria-label="ok hand">
              👌 it's a feature ! 👌
            </span>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Who is this french guy ?</Quote>
            <Cite textColor="quaternary">The crowd</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Image src={images.alexlab} height="200" />
          <List>
            <ListItem bulletStyle="1f916">Junior Frontend Dev</ListItem>
            <ListItem bulletStyle="1f575">Security enthusiast</ListItem>
            <ListItem bulletStyle="1f41d">OWASP Foundation member</ListItem>
            <ListItem bulletStyle="1f680">
              Build stuff (made a LED light blink)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            OWhut ?
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            OPEN
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            WEB
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="quaternary" caps>
            APPLICATION
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            SECURITY
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            <span role="img" aria-label="pizza">
              PIZZA 🍕
            </span>
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="quaternary" caps>
            PIZZA ?
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            <S type="strikethrough">PIZZA</S>
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            <span role="img" aria-label="fire">
              🔥PROJECT🔥
            </span>
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Image
            alt="owasp foundation logo"
            src={images.owasplogo}
            height="150"
          />
          <Heading size={4} textColor="secondary" caps>
            Open Web Application Security Project Foundation
          </Heading>
          <Text textColor="secondary">
            is worldwide not-for-profit charitable organization focused on
            improving the security of software.
          </Text>
          ✨
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="quaternary" caps>
            OWASP Juice Shop 8.x
          </Heading>
          <Text textColor="secondary">
            An intentionally insecure webapp for security trainings written
            entirely in JavaScript which encompasses the entire OWASP Top Ten
            and other severe security flaws
          </Text>
          <Image alt="juiceshop logo" src={images.juiceshoplogo} height="200" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Text textColor="secondary">An OWASP flagship project</Text>
          <Text textColor="secondary">
            Made by
            <Link href="https://twitter.com/bkimminich">Björn Kimminich</Link>
            <span role="img" aria-label="german flag">
              🇩🇪
            </span>
          </Text>
          <Text textColor="secondary">
            Developed by the community
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Text>
          <Image alt="bjorn avatar" src={images.bjorn} height="300" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <BlockQuote>
            <Quote textColor="secondary">
              You're fake news, it's just an old PHP website with spaghetti code
            </Quote>
            <Cite>The crowd</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <BlockQuote>
            <Quote textColor="secondary">Stop it, get some help</Quote>
            <Cite>Michael Jordan</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="quaternary" caps>
            The stack
          </Heading>
          <Image
            alt="architecture diagram"
            src={images.architecture}
            height="500"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <BlockQuote>
            <Quote textColor="secondary">
              Yeah yeah but all this just for XSS vulnerabilities is useless
            </Quote>
            <Cite>The crowd</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Nope.
          </Heading>
          <Image
            alt="vulnerabilities categories"
            src={images.categories}
            height="600"
          />
        </Slide>
      </Deck>
    );
  }
}
