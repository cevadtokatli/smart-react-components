import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure, EnzymeAdapter } from 'enzyme'
import 'jsdom-global/register'

configure({ adapter: new EnzymeAdapter() })
