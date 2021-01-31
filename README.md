## React Password Maker

![RPM](https://user-images.githubusercontent.com/36783010/106371437-2b7ee200-6319-11eb-8dfa-caeb618a1fcc.png)

React Password Maker is a reusable React component that you can use in your React projects. It allows you to create a random password using uppercase and lowercase letters, as well as numbers. Just input the length of your password from 1 to 50 characters in length, and click the button to generate your password. A copy-to-clipboard feature allows you to copy the generated password to your clipboard. Additionally, error messages inform the user if what was inputted does not fall within the required parameters.

## Installation

With npm: `npm install react-password-maker`

## Usage

```
import Password from 'react-password-maker';
```

After importing React Password Maker into your file, add it to your project as you would any other component. `<Password />` is a self-closing component.

## Example

```
const App = () => {
  return (
    <div>
    	<Password />
    </div>
  );
};

export default App;

```
