import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <div class="spinner-border text-dark " role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
    )
  }
}
