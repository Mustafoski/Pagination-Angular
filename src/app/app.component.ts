import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sunny day',
      url:
        'https://images.unsplash.com/photo-1553017811-65622ea2baec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Rainy forest',
      url:
        'https://images.unsplash.com/photo-1591462237705-c022286e7138?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBmb3Jlc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Beautiful girls',
      url:
        'https://images.unsplash.com/photo-1614090965443-3df21c6906ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
}
