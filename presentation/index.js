// Import React
import React, { Component } from 'react';
import clrs from './clrs.js';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';
// Import theme
import theme from './theme';
// Require CSS
require('normalize.css');
require('./theme/index.css');
require('static?!../assets/favicon.ico?output=assets/favicon.ico');

const images = {
  oocss: require('../assets/oocss.png'),
  components: require('../assets/components.jpg'),
  postCss: require('../assets/post-css.gif'),
  flexAxes: require('../assets/flex-axes.jpg'),
  flexDirection: require('../assets/flex-direction.jpg'),
  flexItems: require('../assets/flex-items.jpg'),
  offCanvasNav: require('../assets/off-canvas.gif'),
  fixedHeader: require('../assets/fixed-header.gif'),
  mediaObject: require('../assets/media-object.png'),
  modalDesktop: require('../assets/modal-desktop.gif'),
  modal: require('../assets/modal.gif'),
  modalLayout: require('../assets/modal.png'),
  sidebar: require('../assets/sidebar.gif'),
  verticalCentering: require('../assets/vertical-centering.png'),
};

preloader(images);

const blueBox = {
  backgroundColor: clrs.white,
  color: clrs.blue,
  border: `4px solid ${ clrs.blue }`,
  borderRadius: 6,
  padding: '2rem',
};

const exerciseImage = {
  border: `1px solid ${ clrs.gray }`,
  padding: '0.25rem',
  margin: '1rem',
  borderRadius: 3,
};

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500} progress="bar">
          <Slide>
            <Heading size={1} fit>
              Modular CSS
            </Heading>
            <Text lineHeight={1.2} margin="2rem 0">An intro to building apps with immutable &amp; atomic CSS classes.</Text>
            <Link target="_blank" href="https://github.com/rangle/intro-to-modular-css">
              <Text textColor="red">view on github</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={4}>Overview</Heading>
            <List>
              <ListItem>Base Elements</ListItem>
              <ListItem>Immutable Utilities</ListItem>
              <ListItem>Components</ListItem>
              <ListItem>PostCSS</ListItem>
              <ListItem>Flexbox</ListItem>
              <ListItem>Exercises</ListItem>
            </List>
          </Slide>
          <Slide>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M10.841,13.784c0-0.232-0.188-0.421-0.42-0.421c-0.116,0-0.222,0.048-0.297,0.124l-2.522,2.521c-0.076,0.077-0.123,0.183-0.123,0.298c0,0.232,0.188,0.421,0.42,0.421h1.508l-1.805,1.805c-0.076,0.076-0.123,0.182-0.123,0.298c0,0.232,0.188,0.42,0.42,0.42c0.116,0,0.222-0.047,0.298-0.123l2.522-2.523c0.076-0.075,0.123-0.181,0.123-0.297c0-0.232-0.188-0.42-0.42-0.42h0H8.913l1.805-1.805C10.794,14.005,10.841,13.9,10.841,13.784 M6.216,14.205c-0.116,0-0.221,0.047-0.297,0.123l-2.522,2.522c-0.077,0.076-0.124,0.181-0.124,0.297c0,0.232,0.188,0.421,0.421,0.421c0.116,0,0.221-0.047,0.297-0.123l2.523-2.523c0.077-0.075,0.123-0.181,0.123-0.297C6.636,14.394,6.448,14.205,6.216,14.205M16.722,5.063c0.001-0.036,0.006-0.072,0.006-0.109c0-1.393-1.13-2.523-2.523-2.523c-0.635,0-1.215,0.237-1.658,0.625C11.648,1.671,10.094,0.75,8.318,0.75c-2.533,0-4.623,1.867-4.985,4.299C1.853,5.401,0.75,6.729,0.75,8.318c0,1.857,1.506,3.363,3.364,3.363h11.773c1.857,0,3.363-1.506,3.363-3.363C19.25,6.75,18.174,5.436,16.722,5.063 M15.887,10.841H4.114c-1.391,0-2.523-1.132-2.523-2.523c0-1.172,0.796-2.18,1.938-2.451c0.334-0.079,0.587-0.354,0.638-0.694c0.303-2.042,2.088-3.582,4.152-3.582c1.425,0,2.321,0.299,3.102,1.502c0.132,0.205,0.768,0.762,1.009,0.796c0.039,0.006,0.117,0.008,0.117,0.008c0.202,0,0.398-0.072,0.554-0.208c0.307-0.269,0.699-0.417,1.104-0.417c0.928,0,1.683,0.755,1.682,1.691l-0.005,0.062c-0.018,0.398,0.246,0.754,0.632,0.853c1.116,0.286,1.896,1.289,1.896,2.44C18.409,9.709,17.277,10.841,15.887,10.841 M15.045,14.205c-0.116,0-0.221,0.047-0.297,0.123l-2.522,2.522c-0.076,0.076-0.123,0.181-0.123,0.297c0,0.232,0.188,0.421,0.42,0.421c0.116,0,0.221-0.047,0.298-0.123l2.522-2.523c0.076-0.075,0.123-0.181,0.123-0.297C15.466,14.394,15.277,14.205,15.045,14.205"></path>
            </svg>
            <Heading size={3}>
              The Problem
            </Heading>
          </Slide>
          <Slide>
            <iframe height={ 420 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/vNBBJO/?height=420&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
            <CodePane
              lang="css"
              source={ require('raw!../assets/old-way.scss') }
            />
          </Slide>
          <Slide>
            <Text textAlign="left">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M19.305,9.61c-0.235-0.235-0.615-0.235-0.85,0l-1.339,1.339c0.045-0.311,0.073-0.626,0.073-0.949
                  c0-3.812-3.09-6.901-6.901-6.901c-2.213,0-4.177,1.045-5.44,2.664l0.897,0.719c1.053-1.356,2.693-2.232,4.543-2.232
                  c3.176,0,5.751,2.574,5.751,5.751c0,0.342-0.037,0.675-0.095,1l-1.746-1.39c-0.234-0.235-0.614-0.235-0.849,0
                  c-0.235,0.235-0.235,0.615,0,0.85l2.823,2.25c0.122,0.121,0.282,0.177,0.441,0.172c0.159,0.005,0.32-0.051,0.44-0.172l2.25-2.25
                  C19.539,10.225,19.539,9.845,19.305,9.61z M10.288,15.752c-3.177,0-5.751-2.575-5.751-5.752c0-0.276,0.025-0.547,0.062-0.813
                  l1.203,1.203c0.235,0.234,0.615,0.234,0.85,0c0.234-0.235,0.234-0.615,0-0.85l-2.25-2.25C4.281,7.169,4.121,7.114,3.961,7.118
                  C3.802,7.114,3.642,7.169,3.52,7.291l-2.824,2.25c-0.234,0.235-0.234,0.615,0,0.85c0.235,0.234,0.615,0.234,0.85,0l1.957-1.559
                  C3.435,9.212,3.386,9.6,3.386,10c0,3.812,3.09,6.901,6.902,6.901c2.083,0,3.946-0.927,5.212-2.387l-0.898-0.719
                  C13.547,14.992,12.008,15.752,10.288,15.752z"></path>
              </svg>
            </Text>
            <Heading size={3}
              lineHeight={1.2}
              textAlign="left">
              We Keep<br/>Reinventing the Wheel
            </Heading>
          </Slide>
          <Slide>
            <Text lineHeight={1.5}>Our usual approach is to create new classes. While declaring the same properties with same values but within different contexts.</Text>
          </Slide>
          <Slide>
            <iframe height={ 500 }
              src="//www.chromestatus.com/metrics/css/popularity"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide bgColor="blue">
            <Text>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path style={{ fill: clrs.pink }} d="M18.935,18.509h-3.83c0-2.819-2.285-5.105-5.104-5.105s-5.105,2.286-5.105,5.105H1.066c-0.234,0-0.425,0.19-0.425,0.426c0,0.234,0.191,0.425,0.425,0.425h17.869c0.234,0,0.425-0.19,0.425-0.425C19.359,18.699,19.169,18.509,18.935,18.509 M5.746,18.509c0-2.351,1.905-4.254,4.254-4.254s4.255,1.903,4.255,4.254H5.746zM14.813,14.298l1.805-1.806c0.166-0.166,0.166-0.436,0-0.602c-0.166-0.167-0.436-0.167-0.602,0l-1.806,1.805c-0.165,0.166-0.165,0.436,0,0.603C14.378,14.463,14.647,14.463,14.813,14.298 M9.575,9.575v2.552c0,0.235,0.19,0.426,0.425,0.426s0.425-0.19,0.425-0.426V9.575c0-0.235-0.19-0.426-0.425-0.426S9.575,9.339,9.575,9.575 M5.187,14.298c0.167,0.165,0.436,0.165,0.603,0c0.166-0.167,0.166-0.437,0-0.603l-1.806-1.805c-0.167-0.167-0.435-0.167-0.602,0c-0.166,0.166-0.166,0.436,0,0.602L5.187,14.298z">
              </path>
            </svg>
            </Text>
            <Heading size={3}
              lineHeight={1.2}
              textColor="white">
              Base Elements,
              Immutable Utilities &amp; <br/>
              Components
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} textAlign="left">Base Elements</Heading>
            <List>
              <ListItem>Styles for HTML elements</ListItem>
              <ListItem>Normalize.css</ListItem>
              <ListItem>basscss-basic</ListItem>
              <ListItem>Base form styles</ListItem>
            </List>
            <Link target="_blank" href="http://www.basscss.com/v7/docs/reference/principles/#base-elements" textColor="gray">&sect; basscss/docs/reference/principles/#base-elements</Link>
          </Slide>
          <Slide bgImage={ images.oocss.replace('/', '') } />
          <Slide>
            <Heading size={3}>OOCSS</Heading>
            <List>
              <ListItem>Separate Structure and Skin</ListItem>
              <ListItem>Separate Container and Content</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>Separate Structure and Skin</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="css"
                  source={ require('raw!../assets/not-oocss.scss') }
                />
              </Fill>
              <Fill>
                <CodePane
                  lang="css"
                  source={ require('raw!../assets/oocss.scss') }
                />
              </Fill>
            </Layout>
            <Link target="_blank" href="https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss"
              textSize="1.2rem"
              textColor="gray">
              Example From <i>An Introduction to Object Oriented CSS</i>
            </Link>
          </Slide>
          <Slide>
            <Heading size={4}>Separate Container and Content</Heading>
            <iframe height={ 550 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/MKmWPw/?height=550&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide bgColor="blue">
            <Heading size={1}
              textColor="white"
              lineHeight={1.2}
              style={{ transform: 'translate3d(0, -0.5em, 0)' }}>
              <svg className="svg-icon" viewBox="0 0 20 20"
                style={{ transform: 'translate3d(-.15em, 0.75em, 0)' }}>
                <path style={{ fill: clrs.white }} d="M2.568,7.179H8.96c1.411,0,2.557-1.145,2.557-2.557c0-1.412-1.146-2.557-2.557-2.557H8.534c-0.235,0-0.426,0.19-0.426,0.426c0,0.236,0.191,0.426,0.426,0.426H8.96c0.941,0,1.704,0.763,1.704,1.705S9.901,6.327,8.96,6.327H2.568c-0.236,0-0.426,0.19-0.426,0.426C2.142,6.988,2.333,7.179,2.568,7.179 M15.778,7.179c0-0.941-0.763-1.704-1.704-1.704h-0.427c-0.235,0-0.426,0.19-0.426,0.426c0,0.235,0.19,0.426,0.426,0.426h0.427c0.47,0,0.852,0.382,0.852,0.852c0,0.471-0.382,0.853-0.852,0.853H0.864c-0.236,0-0.426,0.19-0.426,0.426c0,0.235,0.19,0.426,0.426,0.426h13.21C15.016,8.884,15.778,8.12,15.778,7.179 M16.631,9.736H2.568c-0.236,0-0.426,0.19-0.426,0.426c0,0.236,0.19,0.426,0.426,0.426h14.062c0.94,0,1.704,0.764,1.704,1.705s-0.764,1.704-1.704,1.704h-0.427c-0.235,0-0.426,0.19-0.426,0.427c0,0.235,0.19,0.426,0.426,0.426h0.427c1.411,0,2.557-1.145,2.557-2.557S18.042,9.736,16.631,9.736 M10.665,11.44H4.273c-0.236,0-0.426,0.19-0.426,0.426c0,0.236,0.19,0.427,0.426,0.427h6.392c1.412,0,2.557,1.145,2.557,2.557s-1.146,2.557-2.557,2.557h-0.426c-0.236,0-0.426,0.19-0.426,0.426s0.19,0.427,0.426,0.427h0.426c1.883,0,3.41-1.526,3.41-3.409S12.548,11.44,10.665,11.44"></path>
              </svg>
              Immutable Utilities
            </Heading>
          </Slide>
          <Slide>
            <BlockQuote>
              <Quote textSize="3rem">A utility should contain as few CSS properties as possible, generally just one or two. Utilities should do one thing and do it well, they should be simple and obvious to use, and they should operate independently.</Quote>
              <Cite>Basscss Design Principles</Cite>
            </BlockQuote>
          </Slide>
          <Slide>
            <Heading size={6}
              textAlign="left"
              textColor="gray">
              for example:
            </Heading>
            <Heading size={1}
              margin="4rem 0"
              textAlign="left">
              .caps
            </Heading>
            <Text textAlign="left"
              lineHeight={1.5}
              margin="0 4rem">
              text-transform: uppercase;<br/>
              letter-spacing: 0.2em;
            </Text>
          </Slide>
          <Slide>
            <Heading size={4}
              lineHeight={1.5}>
              Utilities provide the backbone for layout, typography and colour.
            </Heading>
          </Slide>
          <Slide>
            <Heading size={4}>Type scale</Heading>
            <List>
              <ListItem>
                <Link target="_blank" href="http://type-scale.com">
                  <Text>type-scale.com</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="http://modularscale.com">
                  <Text>modularscale.com</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="http://gridlover.net/app">
                  <Text>gridlover.net/app</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="http://www.basscss.com/v7/docs/type-scale/">
                  <Text>Basscss type scale</Text>
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4} lineHeight={1.5}>Type scale</Heading>
            <CodePane
              lang="css"
              source={ require('raw!../assets/type-scale.scss') }
            />
          </Slide>
          <Slide>
            <Heading size={4} lineHeight={1.5}>White-Space Scale</Heading>
            <Text lineHeight={1.5} margin="4rem 0">
              <Code style={ blueBox }>property</Code> + <Code style={ blueBox }>direction</Code> + <Code style={ blueBox }>scale</Code>
            </Text>
            <Text lineHeight={1.5}>
              For example: <Code>mb2</Code> ➡ margin bottom 2
            </Text>
          </Slide>
          <Slide>
            <Heading size={4} lineHeight={2}>White-Space Scale</Heading>
            <Text lineHeight={1.5}>
              <Code>0.5rem</Code>, <Code>1rem</Code>, <Code>2rem</Code> & <Code>4rem</Code> works great<br/>
              And it can be scaled up/down using break points.
            </Text>
            <Text margin="2rem 0">
              <Link target="_blank" href="http://www.basscss.com/v7/docs/white-space/">
                <Text>Basscss white-space scale</Text>
              </Link>
            </Text>
          </Slide>
          <Slide>
            <Heading size={4}>Layout Utilities</Heading>
            <List>
              <ListItem>Grid</ListItem>
              <ListItem>Flexbox</ListItem>
              <ListItem>Absolute/fixed positioning</ListItem>
              <ListItem>Responsive States</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>Visual Utilities</Heading>
            <List>
              <ListItem>Text colours</ListItem>
              <ListItem>Background Colours</ListItem>
              <ListItem>Borders</ListItem>
              <ListItem>etc.</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>Frameworks</Heading>
            <List>
              <ListItem>
                <Link target="_blank" href="http://www.basscss.com">
                  <Text>Basscss</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="http://solid.buzzfeed.com">
                  <Text>Buzzfeed Solid</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="http://tachyons.io">
                  <Text>Tachyons</Text>
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Layout>
              <Text textSize="6rem" margin="4rem">🔒</Text>
              <Fill>
                <BlockQuote>
                  <Quote textSize="2rem">The values used for utilities, such as white-space scales, may change over time, but the utilities themselves and their naming conventions should not.</Quote>
                  <Cite>Basscss Design Principles</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={ images.components.replace('/', '') }>
            <Heading size={1} textColor="white">Components</Heading>
          </Slide>
          <Slide>
            <Text lineHeight={1.25} textColor="blue">
              Let the JS drive components. <br/>
              Wait for a pattern to appear before defining a component class.
            </Text>
          </Slide>
          <Slide>
            <Text lineHeight={1.5} textColor="blue">
              The component should still rely on OOCSS utilities as much as possible. Only styles that are not available through OOCSS utilities should be set in the component class.
            </Text>
            <Link target="_blank" href="http://www.basscss.com/v7/docs/guides/ui/">
              <Text margin="4rem 0" textColor="pink">Examples</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={4}>Components</Heading>
            <List>
              <ListItem>
                A component should either be in-line or be responsive.
              </ListItem>
              <ListItem>
                A responsive component should expand to fit its parent – 100% width.
              </ListItem>
              <ListItem>
                Layout/core visual styling comes from the utility classes
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4}>Components</Heading>
            <Text lineHeight={2} textColor="blue">
              Build using BEM
            </Text>
            <Link target="_blank" href="https://github.com/rangle/guidelines/blob/master/content/10-css-and-sass/4-bem.md">
              <Text margin="4rem 0" textColor="pink">more about BEM here</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={4}>For Inline Styles in React</Heading>
            <List>
              <ListItem>
                Use <Link target="_blank" textColor="black" href="http://stack.formidable.com/radium/">
                  <b>Radium</b>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" href="https://github.com/rangle/basscss-radium"
                  textColor="black">
                  <b>basscss-radium</b>
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor="blue">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <polygon style={{ fill: clrs.pink }} points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 " />
              <path style={{ fill: clrs.pink }} d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z" />
              <path style={{ fill: clrs.pink }} d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z" />
              <path style={{ fill: clrs.pink }} d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z" />
            </svg>
            <Heading size={1} textColor="white">
              PostCSS
            </Heading>
          </Slide>
          <Slide>
            <BlockQuote>
              <Quote textSize="3rem">PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.</Quote>
            </BlockQuote>
          </Slide>
          <Slide>
            <Heading size={4}>PostCSS Plugins</Heading>
            <List>
              <ListItem>Autoprefixer</ListItem>
              <ListItem>cssnext</ListItem>
              <ListItem>postcss-import</ListItem>
              <ListItem>cssnano</ListItem>
            </List>
          </Slide>
          <Slide bgImage={ images.postCss.replace('/', '') }>
            <Link href="http://codepen.io/pen?template=KVbboB"
              target="_blank"
              style={{
                fontSize: '4rem',
                padding: '1rem',
                backgroundColor: clrs.white,
                color: clrs.blue,
                border: `8px solid ${ clrs.blue }`,
                fontWeight: 'bold',
              }}>
              Launch Demo
            </Link>
          </Slide>
          <Slide>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825" />
            </svg>
            <Link target="_blank" href="https://gist.github.com/winkerVSbecks/1463823d6407e4fd53d3">
              <Text textColor="blue">Future of CSS at Rangle.io</Text>
            </Link>
          </Slide>
          <Slide bgColor="blue">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path style={{ fill: clrs.white }} d="M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z" />
            </svg>
            <Heading size={3} textColor="white">
              Flexbox
            </Heading>
          </Slide>
          <Slide>
            <iframe height={ 360 }
              scrolling="no"
              src="http://caniuse.com/flexbox/embed"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide>
            <Heading size={4} textAlign="left" textSize="2rem">
              <span style={{ color: clrs.pink }}>Terminology: </span>
              Axes
            </Heading>
            <Image height="550" src={ images.flexAxes.replace('/', '') }
              margin="0" />
            <Text textColor="gray" textSize="1.2rem">
              from Codrops CSS Reference: flexbox
            </Text>
          </Slide>
          <Slide>
            <Heading size={4} textAlign="left" textSize="2rem">
              <span style={{ color: clrs.pink }}>Terminology: </span>
              Direction
            </Heading>
            <Image height="560" src={ images.flexDirection.replace('/', '') }
              margin="0"
              padding="2rem" />
            <Text textColor="gray" textSize="1.2rem">
              from Codrops CSS Reference: flexbox
            </Text>
          </Slide>
          <Slide>
            <iframe height={ 600 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/eNZWqb/?height=600&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide>
            <Heading size={4}>Flex Lines</Heading>
            <List>
              <ListItem textSize="2.2rem">
                Imaginary line used for grouping and aligning items.
              </ListItem>
              <ListItem textSize="2.2rem">Parallel to the main axis.</ListItem>
              <ListItem textSize="2.2rem">
                A flex-container can be either single-line or multi-line.
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={4} margin="2rem 0">Flex Wrap</Heading>
            <iframe height={ 400 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/yNOoey/?height=400&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide>
            <Heading size={4} margin="2rem 0">Align Content</Heading>
            <iframe height={ 400 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/QbNMgW/?height=400&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide>
            <Heading size={4} textAlign="left" textSize="2rem">
              <span style={{ color: clrs.pink }}>Terminology: </span>
              Flex Items
            </Heading>
            <Image height="560" src={ images.flexItems.replace('/', '') }
              margin="0"
              padding="2rem" />
            <Text textColor="gray" textSize="1.2rem">
              from Codrops CSS Reference: flexbox
            </Text>
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem">Flex Items</Heading>
            <iframe height={ 500 }
              scrolling="no"
              src="//codepen.io/winkerVSbecks/embed/LVNjaB/?height=500&theme-id=8427&default-tab=result"
              allowTransparency="true"
              allowFullScreen="true"
              style={{
                width: '100%',
                border: 'none',
              }}>
            </iframe>
          </Slide>
          <Slide>
            <Link target="_blank" href="exercises.html">
              <svg className="svg-icon" viewBox="0 0 20 20"
                style={{ width: '4em', height: '4em' }}>
                <path d="M10,4.75c-5.316,0-9.625,4.505-9.625,10.062c0,0.241,0.196,0.438,0.438,0.438h7.875c0.242,0,0.438-0.196,0.438-0.438c0-0.725,0.392-1.312,0.875-1.312s0.875,0.588,0.875,1.312c0,0.241,0.195,0.438,0.438,0.438h7.875c0.242,0,0.438-0.196,0.438-0.438C19.625,9.255,15.316,4.75,10,4.75 M11.715,14.375c-0.162-0.998-0.868-1.75-1.715-1.75s-1.553,0.752-1.715,1.75H6.523c0.193-1.968,1.676-3.5,3.477-3.5c1.801,0,3.284,1.532,3.477,3.5H11.715z M14.354,14.375C14.153,11.923,12.282,10,10,10s-4.154,1.923-4.355,4.375h-1.75C4.106,10.957,6.755,8.25,10,8.25s5.894,2.707,6.104,6.125H14.354zM16.979,14.375c-0.214-3.902-3.252-7-6.979-7s-6.765,3.098-6.979,7h-1.75C1.49,9.505,5.308,5.625,10,5.625c4.691,0,8.51,3.88,8.729,8.75H16.979z"></path>
                <path style={{ fill: clrs.gray }} d="M11.715,14.375c-0.162-0.998-0.868-1.75-1.715-1.75s-1.553,0.752-1.715,1.75H6.523c0.193-1.968,1.676-3.5,3.477-3.5c1.801,0,3.284,1.532,3.477,3.5H11.715z"></path>
                <path style={{ fill: clrs.mauve }} d="M14.354,14.375C14.153,11.923,12.282,10,10,10s-4.154,1.923-4.355,4.375h-1.75C4.106,10.957,6.755,8.25,10,8.25s5.894,2.707,6.104,6.125H14.354z"></path>
                <path style={{ fill: clrs.pink }} d="M16.979,14.375c-0.214-3.902-3.252-7-6.979-7s-6.765,3.098-6.979,7h-1.75C1.49,9.505,5.308,5.625,10,5.625c4.691,0,8.51,3.88,8.729,8.75H16.979z"></path>
              </svg>
              <Heading size={1}>Exercises</Heading>
            </Link>
          </Slide>
          <Slide>
          <Heading size={4}>Exercises</Heading>
            <CodePane
              margin="2rem 0"
              lang="shell"
              source={ require('raw!../assets/exercises') }
              />
              <Text textAlign="left"
                textSize="2rem"
                margin="0 0 2rem 0">
                Open <Link textColor="blue"
                 href="http://localhost:3000/exercises.html">localhost:3000/exercises.html</Link>
              </Text>
              <Text textAlign="left"
                textSize="2rem">
                Solutions available at <Link textColor="blue"
                 href="http://rangle.github.io/intro-to-modular-css/exercises.html">rangle.github.io/intro-to-modular-css/exercises.html</Link>
              </Text>
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">Vertical Centering</Heading>
            <Image style={ exerciseImage }
              height="600"
              src={ images.verticalCentering.replace('/', '') } />
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">Sidebar</Heading>
            <Image style={ exerciseImage }
              height="600"
              src={ images.sidebar.replace('/', '') } />
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">
              Media Object
            </Heading>
            <Image style={ exerciseImage }
              height="400"
              src={ images.mediaObject.replace('/', '') } />
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">
              Fixed Header
            </Heading>
            <Image style={ exerciseImage }
              height="600"
              src={ images.fixedHeader.replace('/', '') } />
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">Off Canvas Nav</Heading>
            <Image style={ exerciseImage }
              src={ images.offCanvasNav.replace('/', '') } />
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">Modal</Heading>
            <Layout>
              <Fit>
                <Image style={ exerciseImage }
                  src={ images.modal.replace('/', '') } />
              </Fit>
              <Fit>
                <Image style={ exerciseImage }
                  src={ images.modalDesktop.replace('/', '') } />
              </Fit>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={4} textSize="2rem" textAlign="left" margin="0">Modal</Heading>
            <Image style={ exerciseImage }
              height="600"
              src={ images.modalLayout.replace('/', '') } />
          </Slide>
          <Slide>
            <Heading size={1}>Thank You!</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
