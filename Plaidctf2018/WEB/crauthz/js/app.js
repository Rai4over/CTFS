function getCsrfToken() {
    return Cookies.get("js_csrf_token");
  }
  
  function makeAPICall(endpoint, data, handler) {
    var csrfToken = getCsrfToken();
    data.csrf_token = csrfToken;
    $.post(endpoint, data, handler, "json");
  }
  
  function logout() {
    makeAPICall('/api/logout', {}, function() {
      drawLoggedOutHome();
      drawNav(false);
      alert("Logged out!");
    });
  }
  
  function handleNewNote() {
    var panel = $('<div>', {'class': 'panel panel-default'});
    var panelHeading = $('<div>', {'class': 'panel-heading'});
    panelHeading.append($('<h3>', {'class': 'panel-title'}).text('New Note'));
    var panelBody = $('<div>', {'class': 'panel-body'});
    var form = $('<form>', {'action': 'javascript:void(0);'});
    form.append($('<div>', {'class': 'form-group'})
          .append($('<label>', {'for': 'title'}).text('Title'))
          .append($('<input>', {'type': 'text', 'class': 'form-control', 'id': 'title', 'name': 'title'})));
    form.append($('<div>', {'class': 'form-group'})
          .append($('<label>', {'for': 'contents'}).text('Contents'))
          .append($('<textarea>', {'rows': '20', 'class': 'form-control', 'id': 'contents', 'name': 'contents'})));
    form.append($('<div>', {'class': 'form-group'})
          .append($('<button>', {'type': 'submit', 'class': 'btn btn-default'}).text('Create Note')));
    form.submit(function() {
      makeAPICall('/api/make_note', {'title': $("#title").val(), 'contents': $('#contents').val()}, noteMade);
    });
    panelBody.append(form);
    panel.append(panelHeading);
    panel.append(panelBody);
    $('#main_contents').empty();
    $('#main_contents').append(panel);
  }
  
  function noteMade(data) {
    if (data.result !== 'success') {
      alert("Error: " + data.reason);
      return;
    }
    navigateToNote(data);
  }
  
  function makeLink(callback, text) {
    var lnk = $('<a>', {'href': '#'});
    lnk.click(callback);
    lnk.text(text);
    return lnk;
  }
  
  function getNotes(callback) {
    makeAPICall('/api/get_notes', {}, callback);
  }
  
  function drawNote(data) {
    if (data.result !== 'success') {
      alert("Error: " + data.reason);
      return;
    }
    var panel = $('<div>', {'class': 'panel panel-default'});
    var panelHeading = $('<div>', {'class': 'panel-heading'});
    panelHeading.append($('<h3>', {'class': 'panel-title'}).text(data.title));
    var panelBody = $('<div>', {'class': 'panel-body'});
    panelBody.append($('<p>').text(data.contents));
    panel.append(panelHeading);
    panel.append(panelBody);
    $('#main_contents').empty();
    $('#main_contents').append(panel);
  }
  
  function navigateToNote(note) {
    makeAPICall('/api/get_note', {'nid': note.id}, drawNote);
  }
  
  function drawNotesPanel(data) {
    if (data.result !== 'success') {
      alert("Error: " + data.reason);
      return;
    }
    var panel = $('<div>', {'class': 'panel panel-default'});
    var panelHeading = $('<div>', {'class': 'panel-heading'});
    panelHeading.append($('<h3>', {'class': 'panel-title'}).text('My Notes'));
    var panelBody = $('<div>', {'class': 'panel-body'});
    if (data.notes.length > 0) {
      var notesTable = $('<table>', {'class': 'table table-hover table-condensed'});
      var tableHead = $('<thead>').append($('<tr>').append($('<th>').text('Note')));
      var tableBody = $('<tbody>');
      data.notes.forEach(function(note) {
        var noteRow = $('<tr>');
        var noteCell = $('<td>');
        var noteLink = $('<a>', {'href': '#'});
        noteLink.click(function() {
          navigateToNote(note);
        });
        noteLink.text(note.title);
        noteCell.append(noteLink);
        noteRow.append(noteCell);
        tableBody.append(noteRow);
      });
      notesTable.append(tableHead);
      notesTable.append(tableBody);
      panelBody.append(notesTable);
    } else {
      panelBody.append($('<p>').text("We don't have any notes yet!"));
    }
    panel.append(panelHeading);
    panel.append(panelBody);
    $('#main_contents').empty();
    $('#main_contents').append(panel);
  }
  
  function drawNav(loggedIn) {
    $('#navbar_list').empty();
    if (loggedIn) {
      var newPageLink = makeLink(handleNewNote, 'New Note');
      var pagesLink = makeLink(drawLoggedInHome, 'My Notes');
      var logoutLink = makeLink(logout, 'Logout');
      $('#navbar_list').append($('<li>').append(pagesLink)).append($('<li>').append(newPageLink)).append($('<li>').append(logoutLink));
    }
    else {
      var regLink = makeLink(drawRegister, 'Register');
      var loginLink = makeLink(drawLogin, 'Login');
      $('#navbar_list').append($('<li>').append(loginLink));
      $('#navbar_list').append($('<li>').append(regLink));
    }
  }
  
  function drawLoggedOutHome() {
    $('#main_contents').empty();
    var mainPanel = $('<div>', {'class': 'panel panel-default'});
    var mainPanelHeading = $('<div>', {'class': 'panel-heading'});
    var mainPanelBody = $('<div>', {'class': 'panel-body'});
    mainPanelBody.append($('<p>').text('yo you be logged out'));
    mainPanelHeading.append($('<h3>', {'class': 'panel-title'}).text('yo dawg'));
    mainPanel.append(mainPanelHeading);
    mainPanel.append(mainPanelBody);
    $("#main_contents").append(mainPanel);
  }
  
  function drawLoggedInHome() {
    getNotes(drawNotesPanel);
    return true;
  }
  
  function registerDone(data) {
    if (data.result === 'success') {
      // yay, we successfully registered
      drawNav(true);
      drawLoggedInHome();
    } else {
      alert("Error: " + data.reason);
    }
    return false;
  }
  
  function drawUserPass(endpoint, complete, title) {
    var mainPanel = $('<div>', {'class': 'panel panel-default'});
    var mainPanelHeading = $('<div>', {'class': 'panel-heading'});
    var mainPanelBody = $('<div>', {'class': 'panel-body'});
    var userPassForm = $('<form>', {'action': 'javascript:void(0);'});
    userPassForm.append(
      $('<div>', {'class': 'form-group row'})
      .append($('<label>', {'for': 'username', 'class': 'col-sm-2 col-form-label'}).text('Username'))
      .append($('<div>', {'class': 'col-sm-10'})
              .append($('<input>', {'class': 'form-control', 'type': 'text', 'name': 'username', 'id': 'username'}))));
    userPassForm.append(
      $('<div>', {'class': 'form-group row'})
      .append($('<label>', {'for': 'password', 'class': 'col-sm-2 col-form-label'}).text('Password'))
      .append($('<div>', {'class': 'col-sm-10'})
              .append($('<input>', {'class': 'form-control', 'type': 'password', 'name': 'password', 'id': 'password'}))));
    userPassForm.append(
      $('<div>', {'class': 'form-group row'})
      .append($('<div>', {'class': 'col-sm-12'})
        .append($('<button>', {'type': 'submit', 'class': 'btn btn-block'}).text('Submit'))));
    userPassForm.submit(function() {
      makeAPICall(endpoint, {'username': $("#username").val(), 'password': $('#password').val()}, complete);
    });
    mainPanelHeading.append($('<h3>', {'class': 'panel-title'}).text(title));
    mainPanel.append(mainPanelHeading);
    mainPanelBody.append(userPassForm);
    mainPanel.append(mainPanelBody);
    $('#main_contents').empty();
    $('#main_contents').append(mainPanel);
  }
  
  function drawRegister() {
    drawUserPass('/api/register', registerDone, 'Register');
  }
  
  function drawLogin() {
    drawUserPass('/api/login', registerDone, 'Login');
  }
  
  function initialize(loggedIn) {
    drawNav(loggedIn);
    if (loggedIn) {
      drawLoggedInHome();
    } else {
      drawLoggedOutHome();
    }
  }
  
  