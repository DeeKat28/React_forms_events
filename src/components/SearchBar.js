import React from 'react';

class SearchBar extends React.Component {

    //onInputChange(event) {
    //    console.log(event.target.value);
    //}

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"></form> */ }
                <form onSubmit={this.onFormSubmit} className="ui form">
                
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input 
                            id="search" 
                            type="text" 
                            value={this.state.term} 
                            onChange={ e => this.setState({ term: e.target.value }) } 
                            autoComplete="off"
                        />
                        {/* <input id="search" type="text" onChange={this.onInputChange} /> */}
                        {/* <input id="search" type="text" onChange={ (e) => console.log(e.target.value) } /> */}
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;