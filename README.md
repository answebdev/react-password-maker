## React Password Maker

![rpm-logo-small](https://user-images.githubusercontent.com/36783010/106371465-8dd7e280-6319-11eb-9dc1-e6796f995231.png)

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

## Styling

To add more flexibility for your projects, you can style elements of the React Password Maker component to suit your needs, though this is optional. Use the following properties when adding your custom CSS values.

Properties for the input element:

```
inputBorder
inputPadding
inputBorderRadius
inputFont
```

Properties for the instruction text:

```
instructionsTextColor
instructionsFontSize
instructionsFont
```

Properties for the button:

```
buttonColor
buttonTextColor
buttonBorderRadius
buttonPadding
buttonFont
```

Properties for the copy icon:

```
iconColor
iconSize
```

Properties for 'Password copied to clipboard' message:

```
copyMessageTextColor
copyMessageFontSize
copyMessageFont
```

Properties for the error messages:

```
errorMsgTextColor
errorMsgFontSize
errorMsgFont
```

To add your own styles using these properties, simply pass them into the component with the values of your choice. The following example adds the Quicksand font to both the button and the input element, makes the button orange, and the button text black (#000000). You may add and customize as many of the listed styles as you want.

```
const App = () => {
  return (
    <div>
    	<Password
        buttonFont="'Quicksand', sans-serif"
        buttonColor="orange"
        buttonTextColor="#000000"
        inputFont="'Quicksand', sans-serif"
      />
    </div>
  );
};

export default App;
```

To add pseudo-classes to your button (e.g., :hover, :active), you must first select and pass in a class name, for example, 'foo'.

```
const App = () => {
  return (
    <div>
    	<Password
        className='foo'
      />
    </div>
  );
};

export default App;
```

Then, use this class name in your CSS file to add your pseudo-class as you would normally, and add the `!important` property at the end.

```
.foo:hover {
  color: #ffffff !important;
  background-color: dodgerblue !important;
}
```

If you want to control the position of the `<Password />` component, you can wrap the component in a `<div>` and add your CSS, such as margin, for example.

```
    <div style={{ marginLeft: '80px' }}>
    	<Password />
    </div>
```
