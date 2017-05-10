import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return <div className="item">
          <div class="row">
              <div class="col-sm-5 right">
                  <h1>{ entry.getIn(["data", "title"])}</h1>                    
                      {(entry.getIn(['data', 'pricing', 'plans']) || []).map((plan, index) => <div className="w-33-ns ph2" key={index}>
                        <div className="ph2">

                        	<h3 className="b f5 grey-3 tc lh-title mb3">{plan.get('plan')}</h3>

                        	<p className="primary f1 b tc lh-title center">
                        		<span className="f4">$</span>{plan.get('price')}
                        	</p>

                       	  <p className="b">{plan.get('description')}</p>

                        	<ul>
                            {(plan.get('items') || []).map((item, index) => <li key={index}>
                              <p className={index + 1 !== plan.get('items').size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                            </li>)}
                        	</ul>

                        </div>

                      </div>)}
              </div>
              <div class="col-sm-7">
                  <img class="img-responsive" src={getAsset(entry.getIn(["data", "image"]))} alt=""/>                  
              </div>
            </div>
          </div>;
  }
}
