import React from "react";

export default class CarouselPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    return <div className="item">
          <div class="row">
              <div class="col-sm-5 right">
                  <h1>{ entry.getIn(["data", "title"])}</h1>
                    {(entry.getIn(["data", "content", "plans"]) || []).map((blurb, index) => <div key={index}>
                      <p>{blurb.get("text")}</p>
                        {(blurb.get("items") || []).map((item, index) => <div key={index}>
                          <p>hei</p>
                        </div>)}
                    </div>)}
              </div>
              <div class="col-sm-7">
                  <img class="img-responsive" src={getAsset(entry.getIn(["data", "image"]))} alt=""/>
              </div>
            </div>
          </div>;
  }
}
