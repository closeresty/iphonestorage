var DeviceCard = React.createClass({
  render: function () {
    return (
      <div className='ui-card'>
        <Device_section__info data={this.props.data} />
        <Device_section__sideBarMenu />
        <Device_action__toggleMenu />
      </div>
    );
  }
});



var Device_section__info = React.createClass({
  render: function () {
    return (
      <section className='content'>
        <Device_section__mastHead data={this.props.data} />
        <Device_section__freeSpace />
      </section>
    );
  }
});



var Device_section__sideBarMenu = React.createClass({
  render: function () {
    return (
      <section className='sidebar'>
        <nav>
          <Device_section__sideBarNav />
          <Device_section__sideBarRemoveConnection />
        </nav>
      </section>
    );
  }
});



var Device_section__sideBarNav = React.createClass({
  render: function () {
    return (


      <ul>
        <li>
          <a href="#"><i className='fa fa-wifi'></i>Wireless Settings</a>
        </li>
        <li>
          <a href="#"><i className='fa fa-info-circle'></i>Device Information</a>
        </li>
        <li>
          <a href="#"><i className='fa fa-photo'></i>Edit Photos</a>
        </li>
        <li>
          <a href="#"><i className='fa fa-video-camera'></i>Edit Videos</a>
        </li>
      </ul>
    );
  }
});



var Device_section__sideBarRemoveConnection = React.createClass({
  render: function () {
    return (
      <span>
        <div className='disconnect'>
          <a href='#' className='btn btn-disconnect'>Disconnect Device</a>
        </div>
        <div className='reauth'>
          <h3>Re-enter your password</h3>
          <input type='password' />
          <p>
            <a href="#" className='btn btn-cancel js-reAuth'>Cancel</a>
          </p>
        </div>
      </span>
    );
  }
});



var Device_action__toggleMenu = React.createClass({
  handleClick: function () {

    $(this.getDOMNode()).closest('.ui-card').toggleClass('sidebar-open');
  },
  render: function () {
    return (
      <div className='toggle'>
        <a href='#' onClick={this.handleClick}><i className="fa fa-cog"></i></a>
      </div>
    );
  }
});



var Device_section__mastHead = React.createClass({
  render: function () {
    return (
      <header className='masthead'>
        <h1>{this.props.data.deviceName}</h1>
        <div className='device-icon'>
          <i className='fa fa-mobile-phone'></i>
        </div>
      </header>
    );
  }
});


var Device_section__freeSpace = React.createClass({
  render: function () {
    return (


      <article className='device-info'>
        <div className='device-space'>
          <h3>Free Space</h3>
          <div className='available-space'>
            <div className="used-space--photos"></div>
            <div className="used-space--videos"></div>
          </div>
        </div>
        <ul className='device-legend'>
          <li><i className="fa fa-circle videos"></i> Videos</li>
          <li><i className="fa fa-circle photos"></i> Photos</li>
          <li><i className="fa fa-circle available"></i> Available</li>
        </ul>
      </article>
    );
  }
});



var device_data = {
  deviceType: 'iphone',
  deviceName: 'iPhone 17',
  availableSpace: 2048,  
  photosTotalSpace: 768, 
  videosTotalSpace: 384  
}



React.renderComponent(
  <DeviceCard data={device_data} />,
  document.getElementById('device-cards')
);