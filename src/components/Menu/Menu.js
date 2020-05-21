import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";

class Menu extends PureComponent {
  render() {
    return (
        <div>
            <div class="box">
                <button class="button" onClick={() => this.props.history.push('/addNews')}>Add A News Article</button>
            </div>
            <div class="box">
                <button class="button" onClick={() => this.props.history.push('/getNews')}>Read all News Articles</button>
            </div>
        </div>
    )
  }
}
export default withRouter(Menu);

