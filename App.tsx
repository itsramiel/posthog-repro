import {PostHogProvider} from 'posthog-react-native';

function App() {
  return <PostHogProvider apiKey="xxx">{null}</PostHogProvider>;
}

export default App;
