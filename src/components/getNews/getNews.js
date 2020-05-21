import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import { news } from './news';

class GetNews extends PureComponent {
  addNewsHandler = () => {
    this.props.history.push('/addNews');
  }

  //Here data is taken from a predefined json response (news.js), a FETCH (GET) call can be made here to get the news data from the database.

  render() {
    return (
      <div>
        { news.map(item => {
          return (
            <div class="box">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{item.title}</strong>
                      <div>{item.description}</div>
                      <div>Writtern By - <strong>{item.user}</strong></div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
        <button class="button" onClick={this.addNewsHandler}>Add A News Article</button>
      </div>
    )
  }
}

export default withRouter(GetNews);