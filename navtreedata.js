/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "QMdmm", "index.html", [
    [ "The game", "index.html#autotoc_md1", [
      [ "Actions", "index.html#autotoc_md2", null ],
      [ "Round flow", "index.html#autotoc_md3", null ]
    ] ],
    [ "Project status", "index.html#autotoc_md4", null ],
    [ "Documentation", "index.html#autotoc_md5", null ],
    [ "Building", "index.html#autotoc_md6", null ],
    [ "Running", "index.html#autotoc_md7", null ],
    [ "Testing", "index.html#autotoc_md8", null ],
    [ "Network protocol", "index.html#autotoc_md9", null ],
    [ "Directory layout", "index.html#autotoc_md10", null ],
    [ "License", "index.html#autotoc_md11", null ],
    [ "Architecture", "d2/d60/md_architecture.html", [
      [ "Two layers", "d2/d60/md_architecture.html#autotoc_md13", null ],
      [ "QMdmmCore", "d2/d60/md_architecture.html#autotoc_md14", null ],
      [ "QMdmmNetworking", "d2/d60/md_architecture.html#autotoc_md15", [
        [ "The LogicRunner bridge", "d2/d60/md_architecture.html#autotoc_md16", null ],
        [ "Reconnect", "d2/d60/md_architecture.html#autotoc_md17", null ]
      ] ],
      [ "The executables", "d2/d60/md_architecture.html#autotoc_md18", null ]
    ] ],
    [ "Command-line programs", "dd/de1/md_command-line.html", [
      [ "QMdmmBot", "dd/de1/md_command-line.html#autotoc_md20", null ],
      [ "QMdmmCtl", "dd/de1/md_command-line.html#autotoc_md21", [
        [ "status", "dd/de1/md_command-line.html#autotoc_md22", null ]
      ] ],
      [ "QMdmmServer", "dd/de1/md_command-line.html#autotoc_md23", [
        [ "Help and version", "dd/de1/md_command-line.html#autotoc_md24", null ],
        [ "Network transports", "dd/de1/md_command-line.html#autotoc_md25", null ],
        [ "Control plane", "dd/de1/md_command-line.html#autotoc_md26", null ],
        [ "Room, connections and timeouts", "dd/de1/md_command-line.html#autotoc_md27", null ],
        [ "Game rules", "dd/de1/md_command-line.html#autotoc_md28", null ],
        [ "Presets", "dd/de1/md_command-line.html#autotoc_md29", null ],
        [ "Configuration", "dd/de1/md_command-line.html#autotoc_md30", null ],
        [ "Logging", "dd/de1/md_command-line.html#autotoc_md31", null ],
        [ "Stopping", "dd/de1/md_command-line.html#autotoc_md32", null ]
      ] ]
    ] ],
    [ "Concepts", "d6/d3c/md_concepts.html", [
      [ "Two libraries, two kinds of knowledge", "d6/d3c/md_concepts.html#autotoc_md34", null ],
      [ "The joints between them", "d6/d3c/md_concepts.html#autotoc_md35", null ],
      [ "The four programs", "d6/d3c/md_concepts.html#autotoc_md36", null ]
    ] ],
    [ "Getting Started", "d1/dce/md_getting-started.html", [
      [ "Prerequisites", "d1/dce/md_getting-started.html#autotoc_md38", null ],
      [ "Build", "d1/dce/md_getting-started.html#autotoc_md39", null ],
      [ "Install (macOS)", "d1/dce/md_getting-started.html#autotoc_md40", [
        [ "Plain prefix layout (default)", "d1/dce/md_getting-started.html#autotoc_md41", null ],
        [ "Self-contained bundle", "d1/dce/md_getting-started.html#autotoc_md42", null ],
        [ "Disk image", "d1/dce/md_getting-started.html#autotoc_md43", null ]
      ] ],
      [ "Run the server", "d1/dce/md_getting-started.html#autotoc_md44", [
        [ "Where the settings are stored", "d1/dce/md_getting-started.html#autotoc_md45", null ]
      ] ],
      [ "Run bots against a server", "d1/dce/md_getting-started.html#autotoc_md46", [
        [ "Addresses", "d1/dce/md_getting-started.html#autotoc_md47", null ]
      ] ],
      [ "Run a client (GUI)", "d1/dce/md_getting-started.html#autotoc_md48", [
        [ "The programs a local game runs", "d1/dce/md_getting-started.html#autotoc_md49", null ]
      ] ],
      [ "Play a headless game (bots)", "d1/dce/md_getting-started.html#autotoc_md50", null ],
      [ "Run the full test suite", "d1/dce/md_getting-started.html#autotoc_md51", null ],
      [ "Drive a client yourself", "d1/dce/md_getting-started.html#autotoc_md52", null ]
    ] ],
    [ "The QMdmm wire protocol", "dd/d52/md_protocol.html", [
      [ "Frames", "dd/d52/md_protocol.html#autotoc_md54", null ],
      [ "Packet types", "dd/d52/md_protocol.html#autotoc_md55", null ],
      [ "Requests and replies", "dd/d52/md_protocol.html#autotoc_md56", null ],
      [ "Request ids", "dd/d52/md_protocol.html#autotoc_md57", null ],
      [ "Notifies", "dd/d52/md_protocol.html#autotoc_md58", null ],
      [ "Notify ids", "dd/d52/md_protocol.html#autotoc_md59", null ],
      [ "The handshake", "dd/d52/md_protocol.html#autotoc_md60", null ],
      [ "Silence and the heartbeat", "dd/d52/md_protocol.html#autotoc_md61", null ],
      [ "Reconnecting", "dd/d52/md_protocol.html#autotoc_md62", null ],
      [ "Version negotiation", "dd/d52/md_protocol.html#autotoc_md63", null ],
      [ "Protocol errors", "dd/d52/md_protocol.html#autotoc_md64", null ]
    ] ],
    [ "Todo List", "dd/da0/todo.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Properties", "functions_prop.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d7/dd6/classQMdmmCore_1_1Logic.html#aa61d84a18d2cc8a8aac9950f4ee128c4",
"dc/db8/classQMdmmCore_1_1LogicConfiguration.html#a1cd74352103d4ded0999312c6d82b7b5"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';