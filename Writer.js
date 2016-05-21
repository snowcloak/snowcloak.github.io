(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var OPAL_CONFIG = { method_missing: true, arity_check: false, freezing: true, tainting: true };
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, type = nil, title = nil, title2 = nil, author = nil, texts = nil, current_date = nil, source = nil, f = nil;

  Opal.add_stubs(['$require', '$puts', '$gets', '$gsub', '$strip', '$today', '$strftime', '$to_s', '$+', '$new', '$close']);
  self.$require("date");
  type = "narrative";
  self.$puts("Please enter the full title of the composition");
  title = self.$gets();
  title2 = title.$strip().$gsub(" ", "-").$gsub(/[^\w-]/, "");
  self.$puts("Please enter the author");
  author = self.$gets();
  self.$puts("Enter the body of text");
  texts = self.$gets();
  current_date = $scope.get('Date').$today();
  current_date.$strftime("%Y-%m-%d");
  current_date.$to_s();
  source = $rb_plus($rb_plus("" + (current_date), "-"), title2);
  f = $scope.get('File').$new($rb_plus($rb_plus("./", source), ".md"), "w");
  f.$puts("---");
  f.$puts($rb_plus("layout: ", type));
  f.$puts($rb_plus("title: ", "\"" + (title) + "\""));
  f.$puts($rb_plus("author: ", author));
  f.$puts("---");
  f.$puts("<a id=\"title-page\" />");
  self.$puts("---");
  f.$puts(texts);
  return f.$close();
})(Opal);
