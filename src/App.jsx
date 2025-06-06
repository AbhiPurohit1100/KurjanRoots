import React from 'react';
import '@xyflow/react/dist/style.css';
import bg1 from './assets/bg1.jpg'
import { ReactFlow , Background, BackgroundVariant, useNodesState} from '@xyflow/react';
import CustomNodeWithDropdown from './components/dropdown'; 
import '@xyflow/react/dist/style.css';


const initialNodes = [
  {id: '1',
    type: 'customNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Ukhou ji',
      hasDropdown: false,
      imageUrl: bg1, // replace with your actual image URL
      description: '', } },
  { id: '2',
    type: 'customNode',
    position: { x: 0, y: 150 },
    data: {
      label: 'Khaam Ji',
      hasDropdown: false,
      imageUrl: bg1, // replace with your actual image URL
      description: 'Semi mein bas gaye', } },
      { id: '3',
    type: 'customNode',
    position: { x: 0, y: 300 },
    data: {
      label: 'Baav ji',
      hasDropdown: false,
      imageUrl: bg1, // replace with your actual image URL
      description: 'Semi mein bas gaye', } },
      { id: '4',
    type: 'customNode',
    position: { x: -200, y: 450 },
    data: {
      label: 'Maloop ji',
      hasDropdown: false,
      imageUrl: bg1, // replace with your actual image URL
      description: 'Semi mein bas gaye',
    } },
      { id: '5',
    type: 'customNode',
    position: { x: 200, y: 450 },
    data: {
      label: 'Salop ji',
      hasDropdown: true,
      imageUrl: bg1,// replace with your actual image URL
      description: 'Semi mein bas gaye', } },
        { id: '6',
    type: 'customNode',
    position: { x: -300, y: 600 },
    data: {
      label: 'Kripalu',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'Semi mein bas gaye', } },
      { id: '7',
    type: 'customNode',
    position: { x: 0, y: 600 },
    data: {
      label: 'Prahlad',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'Semi mein bas gaye', } },
      { id: '8',
    type: 'customNode',
    position: { x: 300, y: 600 },
    data: {
      label: 'Jasodhar',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'Semi mein bas gaye', } },
      { id: '9',
    type: 'customNode',
    position: { x: -150, y: 750 },
    data: {
      label: 'Hemant',
      hasDropdown: true,
      imageUrl: bg1,// replace with your actual image URL
      description: '7 Parivar kwili barkoti wale', } },
      { id: '10',
    type: 'customNode',
    position: { x: 150, y: 750 },
    data: {
      label: 'Sumant',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: '7 Parivar kwili barkoti wale', } },
      { id: '11',
    type: 'customNode',
    position: { x: 550, y: 750 },
    data: {
      label: 'Dhamu ji',
      hasDropdown: true,
      imageUrl: bg1,// replace with your actual image URL
      description: 'Pali wale', } },
      { id: '12',
    type: 'customNode',
    position: { x: 850, y: 750 },
    data: {
      label: 'Sashidhar',
      hasDropdown: true,
      imageUrl: bg1,// replace with your actual image URL
      description: 'temna sangu wale', } },
      { id: '13',
    type: 'customNode',
    position: { x: -550, y: 750 },
    data: {
      label: 'Hemchandra',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'temna sangu wale', } },
      { id: '14',
    type: 'customNode',
    position: { x: -850, y: 750 },
    data: {
      label: 'Jagendra',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'temna sangu wale', } },
      { id: '15',
    type: 'customNode',
    position: { x: -1150, y: 750 },
    data: {
      label: 'Dillu ram',
      hasDropdown: true,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '16',
    type: 'customNode',
    position: { x: -50, y: 950 },
    data: {
      label: 'Chandi das',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '17',
    type: 'customNode',
    position: { x: 250, y: 950 },
    data: {
      label: 'Dineshwar(dinna)',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '18',
    type: 'customNode',
    position: { x: 550, y: 950 },
    data: {
      label: 'Bhaskar',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '19',
    type: 'customNode',
    position: { x: -50, y: 1100 },
    data: {
      label: 'Kameshwar',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '20',
    type: 'customNode',
    position: { x: 250, y: 1100 },
    data: {
      label: 'Ravi ji',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
       { id: '21',
    type: 'customNode',
    position: { x: 550, y: 1100 },
    data: {
      label: 'Gangaram',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
       { id: '22',
    type: 'customNode',
    position: { x: 850, y: 1100 },
    data: {
      label: 'Harsh Dev',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
       { id: '23',
    type: 'customNode',
    position: { x: 1150, y: 1100 },
    data: {
      label: 'Ramvaksh',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '24',
    type: 'customNode',
    position: { x: -650, y: 1300 },
    data: {
      label: 'Brijshwar',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '25',
    type: 'customNode',
    position: { x: -350, y: 1300 },
    data: {
      label: 'Vamdev',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '26',
    type: 'customNode',
    position: { x: 50, y: 1300 },
    data: {
      label: 'Ajabram',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '27',
    type: 'customNode',
    position: { x: 350, y: 1300 },
    data: {
      label: 'Sahajram',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '28',
    type: 'customNode',
    position: { x: 1050, y: 1300 },
    data: {
      label: 'Lalita prashad(Latu)',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '29',
    type: 'customNode',
    position: { x: 1450, y: 1300 },
    data: {
      label: 'Teekaram',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '30',
    type: 'customNode',
    position: { x: 1850, y: 1300 },
    data: {
      label: 'Yugvrati',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '31',
    type: 'customNode',
    position: { x: -1850, y: 1500 },
    data: {
      label: 'Rameshwar',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '32',
    type: 'customNode',
    position: { x: -1550, y: 1500 },
    data: {
      label: 'Chaitram',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '33',
    type: 'customNode',
    position: { x: -650, y: 1500 },
    data: {
      label: 'Netram',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '34',
    type: 'customNode',
    position: { x: -950, y: 1500 },
    data: {
      label: 'Sanjay(Sauju)',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '35',
    type: 'customNode',
    position: { x: -1250, y: 1500 },
    data: {
      label: 'Thelu',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '36',
    type: 'customNode',
    position: { x: -950, y: 1900 },
    data: {
      label: 'Deva',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '37',
    type: 'customNode',
    position: { x: -650, y: 1900 },
    data: {
      label: 'Gyani',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '38',
    type: 'customNode',
    position: { x: -1250, y: 1900 },
    data: {
      label: 'Ratti',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '39',
    type: 'customNode',
    position: { x: -350, y: 1900 },
    data: {
      label: 'Saunu',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
        { id: '40',
    type: 'customNode',
    position: { x: -100, y: 1700 },
    data: {
      label: 'Gautam',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
        { id: '41',
    type: 'customNode',
    position: { x: 200, y: 1700 },
    data: {
      label: 'Lachhmu',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '42',
    type: 'customNode',
    position: { x: 500, y: 1700 },
    data: {
      label: 'Mangli',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '43',
    type: 'customNode',
    position: { x: 800, y: 1700 },
    data: {
      label: 'Kali',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '44',
    type: 'customNode',
    position: { x: 1100, y: 1700 },
    data: {
      label: 'Jyoti',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '45',
    type: 'customNode',
    position: { x: 1700, y: 1550 },
    data: {
      label: 'Santu',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '46',
    type: 'customNode',
    position: { x: 2600, y: 1550 },
    data: {
      label: 'Dhoora',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '47',
    type: 'customNode',
    position: { x: 1400, y: 1550 },
    data: {
      label: 'Rupa',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '48',
    type: 'customNode',
    position: { x: 2000, y: 1550 },
    data: {
      label: 'Sobha',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
      { id: '49',
    type: 'customNode',
    position: { x: 2300, y: 1550 },
    data: {
      label: 'Ballu ',
      hasDropdown: false,
      imageUrl: bg1,// replace with your actual image URL
      description: 'kwili', } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  }},
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e4-5', source: '4', target: '6', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e4-6', source: '4', target: '7', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e4-8', source: '4', target: '8', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e7-9', source: '7', target: '9', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e7-10', source: '7', target: '10', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e8-11', source: '8', target: '11', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e8-12', source: '8', target: '12', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e6-13', source: '6', target: '13', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e6-14', source: '6', target: '14', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e6-15', source: '6', target: '15', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e13-16', source: '13', target: '16', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e13-17', source: '13', target: '17', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e13-18', source: '13', target: '18', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e16-19', source: '16', target: '19', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e17-20', source: '17', target: '20', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e18-21', source: '18', target: '21', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e18-22', source: '18', target: '22', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e18-23', source: '18', target: '23', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e19-24', source: '19', target: '24', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e19-25', source: '19', target: '25', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e20-26', source: '20', target: '26', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e20-27', source: '20', target: '27', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e22-28', source: '22', target: '28', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e22-29', source: '22', target: '29', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e22-30', source: '22', target: '30', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e24-31', source: '24', target: '31', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e24-32', source: '24', target: '32', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e24-33', source: '24', target: '33', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e24-34', source: '24', target: '34', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e24-35', source: '24', target: '35', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e25-36', source: '25', target: '36', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e25-37', source: '25', target: '37', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e25-38', source: '25', target: '38', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e25-39', source: '25', target: '39', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e26-40', source: '26', target: '40', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e26-41', source: '26', target: '41', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e26-42', source: '26', target: '42', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e26-43', source: '26', target: '43', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e26-44', source: '26', target: '44', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e27-45', source: '27', target: '45', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e27-46', source: '27', target: '46', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e27-47', source: '27', target: '47', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e27-48', source: '27', target: '48', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
  { id: 'e27-49', source: '27', target: '49', type: 'smoothstep', style: { stroke: '#000000', strokeWidth: 3  } },
];
 
const nodeTypes = {
  customNode: CustomNodeWithDropdown
}
const TopBar = () => {
  return (
    <nav className="bg-gray-800 text-white text-center p-4 text-4xl">
      KURJHAN VANSHAVALI
    </nav>
  )
}
export default function App() {

  return (
    <>
    <TopBar></TopBar>


      <div style={{ width: '100vw', height: '100vh'}}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} fitView>
          <Background/>
        </ReactFlow>  
      </div>
    </>
  );
}