import './prism.clojure';

import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  // Code,
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
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  entropy: require('../assets/entropy.jpg'),
  mh: require('../assets/margaret-hamilton.gif'),
  dijkstra: require('../assets/dijkstra.jpg'),
  romanJakobson: require('../assets/roman-jakobson.jpg'),

  chisels: require('../assets/chisels.jpg'),
  chainsaw: require('../assets/chainsaw.jpg'),
  powerTool: require('../assets/power-tool.jpg'),
  treepruner: require('../assets/tree-pruner.jpg'),
  propaganda: require('../assets/propaganda.jpg'),
  swagger: require('../assets/swagger.png'),

  cltjs: require('../assets/cltjs.jpg'),
  skookum: require('../assets/skookum.png'),
  cltfed: require('../assets/cltfed.png'),
  react: require('../assets/react.svg'),
  walmart: require('../assets/walmart.jpg'),
  matrix: require('../assets/matrix.gif'),

  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Perpetual Refactoring
            </Heading>
            <Heading size={1} fit caps>
              & Living Systems
            </Heading>
            <Heading size={1} fit caps textColor="black">
              with Dustan Kasten the First (and Last)
            </Heading>
          </Slide>

          <Slide transition={['zoom']} bgColor="white" notes="who am I?">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Organizer
            </Heading>
            <Image height="240px" margin="1em" src={images.skookum} />
            <Image height="240px" margin="1em" src={images.cltjs} />
          </Slide>

          <Slide transition={['zoom']} bgColor="primary" notes="who am I?">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              dustan.kasten@gmail.com
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor="white" notes="Really fun stuff">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              ...in two weeks
            </Heading>
            <Image height="240px" margin="1em" src={images.cltfed} />
            <Image height="240px" margin="1em" src={images.react} />
          </Slide>

          <Slide transition={['slide']} bgImage={images.walmart} notes="Fortune 1" />

          <Slide transition={['zoom']} bgColor="black" bgImage={images.matrix}
            notes={
              <div>
                <div>Who here has ever developed software?</div>
                <div>In that process did requirements ever change?</div>
                <div>Did the technology ever change?</div>
              </div>
            }
          />

          <Slide transition={['fade']} bgImage={images.entropy} bgDarken={0.75}
            notes={
              <div>
                <div>Shifting sand beneath our feat</div>
                <div>Headed towards a foggy destination</div>
              </div>
            }
          >
            <Appear fid="0">
              <div style={{position: 'absolute'}}>
                <Heading size={2} caps fit textColor="primary" textFont="primary">Entropy</Heading>
              </div>
            </Appear>
            <Appear fid="1">
              <div style={{position: 'absolute'}}>
                <Heading size={2} caps fit textColor="white" textFont="primary">
                  lack of order or predictability; gradual decline into disorder.
                </Heading>
              </div>
            </Appear>
          </Slide>


          <Slide transition={['slide']} bgColor="black">
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Tools
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor="black" bgImage={images.chainsaw} />
          <Slide transition={['slide']} bgColor="black" bgImage={images.powerTool} />
          <Slide transition={['slide']} bgColor="black" bgImage={images.chisels} />
          <Slide transition={['slide']} bgColor="black" bgImage={images.treepruner} />
          <Slide transition={['slide']} bgColor="black" bgImage={images.propaganda} />
          <Slide transition={['fade']} bgColor="black">
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Tools
            </Heading>
            <Heading size={2} caps fit textColor="black" textFont="primary">
              Materials
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgColor="black">
            <Heading size={2} caps fit textColor="gray" textFont="primary">
              Tools
            </Heading>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              Materials
            </Heading>
          </Slide>


          <Slide transition={['fade']} bgColor="black" notes="Why am I even talking about this?">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              ? ? ?
            </Heading>
          </Slide>


          <Slide transition={['slide']} bgColor="black">
            <Layout>
              <Fit>
                <Image src={images.romanJakobson.replace('/', '')} width="200px" height="auto" margin="40px 0" />
              </Fit>
              <Fill>
                <BlockQuote>
                  <Quote>
                    Languages differ essentially in what they must convey and not in what they may convey
                  </Quote>
                  <Cite>Roman Jakobson</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require('raw!../assets/jsx.example')}
              margin="20px auto"
            />
            <CodePane
              lang="rust"
              source={require('raw!../assets/rust.example')}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="ruby"
              source={require('raw!../assets/ruby.example')}
              margin="20px auto"
            />
            <CodePane
              lang="clojure"
              source={require('raw!../assets/clojure.example')}
              margin="20px auto"
            />
            <CodePane
              lang="haskell"
              source={require('raw!../assets/haskell.example')}
              margin="20px auto"
            />
          </Slide>


          {/*
          <Slide transition={['slide', 'slide']}
            bgColor="white"
            notes={<div>
              <div>Margaret Hamilton</div>
              <div>Software Engineer is responsible for...</div>
              <ul>
                <li>When software ships</li>
                <li>Maintainability</li>
                <li>Stability</li>
                <li>Security</li>
                <li>Quality</li>
              </ul>
            </div>}
          >
            <Image height="80vh" src={images.mh.replace('/', '')} />
          </Slide>
          */}

          <Slide transition={['slide']} bgColor="black">
            <Layout>
              <Fit>
                <Image src={images.dijkstra.replace('/', '')} width="200px" height="auto" margin="40px 0" />
              </Fit>
              <Fill>
                <BlockQuote>
                  <Quote>
                    The purpose of abstraction is not to be vague, but to create a
                    new semantic level in which one can be absolutely precise.
                  </Quote>
                  <Cite>Djikstra</Cite>
                </BlockQuote>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="">
            <CodePane
              lang="jsx"
              source={require('raw!../assets/jsx-2.example')}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="white">
              Data Structures
            </Heading>
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="">
            <CodePane
              lang="clojure"
              source={require('raw!../assets/data-structures.example')}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="white">
              Data Structures
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              Evolving Semantics
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor="primary" notes="">
            <iframe src="http://astexplorer.net/#/Wjr0D43mYG" style={{height: '90vh', width: '140%', border: 0, margin: '-5% 0 0 -20%'}} />
          </Slide>

          <Slide transition={['slide']} bgColor="primary" notes="">
            <iframe src="http://astexplorer.net/#/O9LSiPnjO9" style={{height: '90vh', width: '140%', border: 0, margin: '-5% 0 0 -20%'}} />
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="white">
              Data Structures...
            </Heading>
            <Heading size={1} caps fit textColor="white">
              Hmm....
            </Heading>
          </Slide>

          <Slide transition={['slide']} bgColor="primary" notes="">
            <iframe src="http://petstore.swagger.io/#!/user/createUser" style={{background: '#fff', height: '90vh', width: '140%', border: 0, margin: '-5% 0 0 -20%'}} />
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="white">
              Demo
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgImage={images.entropy} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white">
              Tools
            </Heading>
            <Heading size={1} caps fit textColor="white">
              shape our thinking
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgImage={images.entropy} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white">
              Materials
            </Heading>
            <Heading size={1} caps fit textColor="white">
              shape our thinking
            </Heading>
          </Slide>

          <Slide transition={['fade']} bgImage={images.entropy} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary" style={{marginTop: '-5em'}}>
              Learn
            </Heading>
            <Heading size={1} caps fit textColor="white">
              To Influence
            </Heading>
            <Heading size={1} caps fit textColor="white">
              Your Thinking
            </Heading>
          </Slide>

          <Slide transition={['spin', 'slide']} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Thank You
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
