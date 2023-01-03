import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import 'jsdom-global/register'

configure({ adapter: new Adapter() })
