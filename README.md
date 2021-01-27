## What is this?

React Password Maker is a component that you can import an use in your projects. It allows you to create a random password using uppercase and lowercase letters, as well as numbers. Just type a number in the input field for how many characters you'd like your password to have, and click the button. Your random password will then be generated.

## Installation

Run `npm install react-password-maker`

Use:

```
import Password from 'react-password-maker';
```

After importing it into your file, just use it in your project as you would any other component. `<Password />` is a self-closing component.

```
const Example = () => {
  return (
    <div>
    	<Password />
    </div>
  );
};

export default Example;

```
