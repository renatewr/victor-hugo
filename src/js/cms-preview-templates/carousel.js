import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    return <div className="item">
          <div class="row">
              <div class="col-sm-5 right">
                  <h1>{ entry.getIn(["data", "title"])}</h1>
                      {(entry.getIn(["data", "content", "plans"]) || []).map((plan, index) => <div className="w-33-ns ph2" key={index}>
                          <ul>
                            {(plan.get("items") || []).map((item, index) => <li key={index}>
                              <p className={index + 1 !== plan.get("items").size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                            </li>)}
                          </ul>
                      </div>)}
              </div>
              <div class="col-sm-7">
                  <img class="img-responsive" src={getAsset(entry.getIn(["data", "image"]))} alt=""/>
              </div>
            </div>
          </div>;
  }
}
