import App from './App';
import Logo from './logo.svg';
const root = document.getElementById('root');
root.innerHTML = `
<img src = '${Logo}' alt = "build tool" />
<h1> learning web tooling today </h1>
${App({ name: 'Sruthi' })}
`;
