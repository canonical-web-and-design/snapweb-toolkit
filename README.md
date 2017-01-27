# snapweb-toolkit

## Example

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'snapweb-toolkit'
import 'snapweb-toolkit/lib/styles.css'

ReactDOM.render(
  <div>
    <Button label='Button' />
  </div>,
  document.getElementById('root')
)
```

## Usage

Add the toolkit to your React project by adding `snapweb-toolkit` in your package.json `dependencies` field:

```json
{
  dependencies: {
    "snapweb-toolkit": "git://github.com/ubuntudesign/snapweb-toolkit.git#master"
  }
}
```

Import the toolkit CSS file:

```jsx
import 'snapweb-toolkit/lib/bundle.css'
```

Import the components you need:

```jsx
import { Button } from 'snapweb-toolkit'
```


## How to develop

To develop the toolkit as you use it, you need to use the [`npm link`](https://docs.npmjs.com/cli/link) command.

Clone the toolkit somewhere on your system:

```sh
git clone git@github.com:ubuntudesign/snapweb-toolkit.git
```

Link it globally, so you can use this version from anywhere on your system:

```sh
cd snapweb-toolkit
npm link
```

Link it in your project:

```sh
cd <YOUR_PROJECT_FOLDER>
npm link snapweb-toolkit
```

Run the watch script to recompile the changed files:

```sh
cd snapweb-toolkit
npm run watch
```

If you have a watch script in your project, you can launch it in another shell session:

```sh
cd <YOUR_PROJECT_FOLDER>
npm run watch
```

By doing so, any change in the toolkit will trigger a rebuild, which will in turn trigger a rebuild in your own project.
