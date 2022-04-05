import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children?: React.ReactNode;
}

export class Portal extends React.Component<Props, Record<string, never>> {
  el!: HTMLDivElement;
  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const app = document.querySelector('.app');
    if (app) app.appendChild(this.el);
  }

  componentWillUnmount() {
    const app = document.querySelector('.app');
    if (app) app.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
