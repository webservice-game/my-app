import { render, screen } from '@testing-library/react';
import App from './App';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })
describe("counter testing", () =>{
  test('render the title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain("Welcome to the matchmaking application");
  // const{getByText} =  render(<App />);
  //   const linkElement = getByText('Welcome to the matchmaking application');
  //   expect(linkElement).toBeInTheDocument();
  });
})

