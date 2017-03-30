import React from 'react';

const NewPlaylist = (props) => {
  return (
    <div className="well">
      <form onSubmit={props.onSubmit}  className="form-horizontal">
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" onChange={props.onChange} value={props.initialValue} type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button disabled={props.validation()} type="submit" className="btn btn-success" >Create Playlist</button>
              {(props.validation() && !props.initLoad) && <div className="alert alert-warning">Please enter a valid name!!!</div>}
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default NewPlaylist
