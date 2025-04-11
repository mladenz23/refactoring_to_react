import calculatorImg from '../assets/icons/calcImg.png';
import documentImg from '../assets/icons/docImg.png';
import historyImg from '../assets/icons/histImg.png';

const infoData = [
  {
    title: 'Calculate BMI',
    label: 'Calculator',
    image: calculatorImg,
    text: `The BMI Tracker app will accurately calculate your body mass index based on your height and weight and display it graphically. Our team of experts regularly ensures the accuracy of the algorithm, frequent updates, and the introduction of new features to our application, thereby also ensuring a good user experience.`,
  },
  {
    title: 'Advice',
    label: 'Document',
    image: documentImg,
    text: `In addition to calculating the body mass index and providing graphical displays, we also offer users advice on how to improve their condition if they are not satisfied with it. Alongside the built-in short tips, users can also reach out to us via our contact form, to which we respond as quickly as possible.`,
  },
  {
    title: 'Results history',
    label: 'History',
    image: historyImg,
    text: `The measurements taken by the user are continuously saved. Users can access their stored measurements through their personal profile within the app. Measurement storage is available exclusively to registered or logged-in users.`,
  },
];

export default infoData;
