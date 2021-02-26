import { render, screen } from '@testing-library/react';
// import App from './App';
import About from './About';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })
describe("counter testing", () =>{
  test('render the title', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('h1').text()).toContain("About Us");
  // const{getByText} =  render(<App />);
  //   const linkElement = getByText('Welcome to the matchmaking application');
  //   expect(linkElement).toBeInTheDocument();
  });
})

