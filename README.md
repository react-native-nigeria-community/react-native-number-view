# **React Native Number View**
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<img src="img/img1.png" alt="image1" style="" />

![image1](img/img2.png)

<img src="img/img3.png" alt="image1" style="" />

This is a simple React Native number counter component. 



### Installation

Add react-native-number-view to your project by executing

```
$  npm install react-native-number-view
or
$ yarn add react-native-number-view
```



> and that's it, you're all good to go!



### Usage

```javascript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {NumberView} from 'react-native-number-view'
 
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <NumberView
            enableDefaultStyles={true}
            themeColor="#3F6D2A"
            leftContent={<Text>😔</Text>}
            rightContent={<Text>😃</Text>}
            onValueChange={(newVal)=>{alert(newVal)}}
            onDecrement={()=>{alert('decremented')}}
            onIncrement={()=>{alert('Incremented')}}
          />
      </View>
    );
  }
}

```





## API's

| Name                          | Use                                        | Default Values |
| ----------------------------- | ------------------------------------------ | -------------- |
| leftContent                   | Content to be displayed on the left        | None           |
| rightContent                  | Content to be displayed on the Right       | None           |
| onValueChange                 | Callback which return new value            | None           |
| onDecrement                   | callback each time value is decremented    | None           |
| onIncrement                   | callback each time value is incremented    | None           |
| themeColor                    | Use to set a theme color(only accepts HEX) | none           |
| enableDefaultStyles (boolean) | enable or disable preset styles            | True           |
| initialValue                  | counters initial value                     | 0              |
|                               |                                            |                |



## Contributions

What to help make this package even more awesome? [Read how to contribute](https://github.com/react-native-nigeria/react-native-number-view/blob/master/contribution.md)



## Licensing

This project is licensed under MIT license.



### Don't forget to star, like and share :)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://linksnest.com/just1and0"><img src="https://avatars3.githubusercontent.com/u/17249207?v=4" width="100px;" alt=""/><br /><sub><b>Oluwatobi Shokunbi </b></sub></a><br /><a href="https://github.com/react-native-nigeria-community/react-native-number-view/commits?author=just1and0" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!