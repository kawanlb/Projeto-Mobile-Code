import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome!',
      logo: 'Four-legged friend',
      login:'Log In',
      signup: 'create new account',
      or: 'or',
      userOrEmailPlaceHolder: 'Username or email',
      passwordPlaceHolder: 'Password',
      forgotPassword:'Forgot password?',
      SignUp: 'Create your account',
      userPlaceHolder:'User',
      emailPlaceHolder: 'Email',
      registerButtonLabel:'Register',
      categories:'Categories',
      all: 'All',
      cats: 'Cats',
      dogs:'Dogs',
      birds:'Birds',
      searchBarText:'Find a Pet',
      years: 'years',
      year: 'year',
      alertInvalidPassword:'Please, insert a strong password.',
      alertInvalidEmail:'Please, insert a valid email.',

    },
  },
  pt: {
    translation: {
      welcome: 'Bem-vindo!',
      logo: 'Amigo de quatro patas',
      login:'Entrar',
      signup: 'crie sua conta',
      or: 'ou',
      userOrEmailPlaceHolder:'Nome de usuário ou email',
      passwordPlaceHolder: 'Senha',
      forgotPassword:'Esqueceu a senha?',
      SignUp: 'Crie sua conta',
      userPlaceHolder:'Usuário',
      emailPlaceHolder:'Email',
      registerButtonLabel:'Cadastrar',
      categories:'Categorias',
      all:'Todos',
      cats: 'Gatos',
      dogs:'Cães',
      birds:'Aves',
      searchBarText:'Buscar um animal',
      years: 'anos',
      year: 'ano',
      alertInvalidPassword:'Por favor, insira uma senha forte.',
      alertInvalidEmail:'Por favor, insira um email válido.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;