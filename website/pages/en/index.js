/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );


/* Cabeçalho da página inicial */

    const ProjectHeader = () => (
      <div
        id = "projectheader"
        className="projectheader"
        style={{textAlign: 'center'}}>
        <img src="/img/2.svg" id="img1padding"></img>
        <br/>
        <img src="/img/1.svg"></img>
        <h2>Acesse através dos links abaixo:</h2>
      </div>
    );

/*
    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    Usar isso no return --> <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} /> */



    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    /* exemplo de botão para acessar página <Button href={docUrl('doc1.html')}>Example Link</Button>*/

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectHeader />
          <PromoSection>
            <Button href="https://webgente.bomdespacho.mg.gov.br/">WebGENTE Bom Despacho</Button>
            <Button href="https://webgente.bomdespacho.mg.gov.br/">WebGENTE Jacobina</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );



/* Configurações da página inicial */

/*Botões*/
    
const Button = (props) => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

/*
    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'O WebGENTE foi construído para se adequar a todos os tamanhos de tela, trazendo maior acessibilidade e agilidade para o uso cotidiano',
            image: `${baseUrl}img/responsive.svg`,
            imageAlign: 'top',
            title: 'Responsividade',
          },
          {
            content: 'Sem segredos! A interface amigável do WebGENTE permite que qualquer um possa acessar a aplicação e usá-la sem dificuldades',
            image: `${baseUrl}img/code.svg`,
            imageAlign: 'top',
            title: 'Facilidade',
          },
        ]}
      </Block>
    );

*/



/*
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );
*/




    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra sapien at lorem lobortis, eget viverra ante sagittis. Sed quis est ut felis sollicitudin tempus. Sed lacinia sit amet libero pulvinar convallis. Morbi et orci aliquet, finibus neque id, imperdiet velit. Mauris sodales dictum velit eu faucibus. Phasellus quis blandit lacus, et euismod quam. Donec quis semper libero. In laoreet elit ac lorem faucibus finibus.',
            image: `${baseUrl}img/MOCKPC2.png`,
            imageAlign: 'right',
            title: 'Sobre o WebGENTE',
          },
        ]}
      </Block>
    );






    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/code2.svg`,
            imageAlign: 'left',
            title: 'Desenvolvimento',
          },
        ]}
      </Block>
    );






    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'O GENTE - Grupo de Engenharia para Gestão Territorial é um grupo de pesquisa que desenvolve projetos de engenharia relacionados à gestão do território. Composto por professores, pesquisadores e estudantes do Departamento de Engenharia Civil da Universidade Federal de Viçosa.',
            image: `${baseUrl}img/logogente1.svg`,
            imageAlign: 'right',
            title: 'Sobre o Grupo',
          },
        ]}
      </Block>
    );

  
   /*Teste de divisão da página inicial */

    const Sitegente = () => (
      <div
        className="sitegente"
        style={{textAlign: 'center'}}>
        <h2>Acesse nosso site!</h2>
        <Button href="https://webgente.bomdespacho.mg.gov.br/">SITE GENTEUFV</Button>
      </div>
    );

   

    /*
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };
*/

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <LearnHow />
          <TryOut />
          <Description /> 
          <Sitegente />        
        </div>
      </div>
    );
  }
}

module.exports = Index;
