shioharaApp.controller('ShWidgetFileCtrl', [ '$scope', 'Upload', '$timeout','$uibModal',
		function($scope, Upload, $timeout,$uibModal) {
			$scope.fileName = null;
			$scope.uploadNewFile = false;
			$scope.$watch('shPostAttr.file', function() {
				if ($scope.shPostAttr.file != null) {
					$scope.uploadNewFile = false;
					$scope.fileName = $scope.shPostAttr.file.name;
					$scope.shPostAttr.strValue = $scope.fileName;
				}
			});

			$scope.newFile = function() {
				$scope.uploadNewFile = true;
			}
			$scope.clearFile = function(shPostAttr) {
				shPostAttr.strValue = null;
				shPostAttr.file = null;
			}
			
			$scope.selectFile =  function(shPost, shPostAttr) {
				var modalInstance = this.modalSelectFile(shPost);
                modalInstance.result.then(function (instance) {
                	// Selected YES
                }, function () {
                    // Selected NO
                });
			}
			
			$scope.modalSelectFile = function (shPost) {
                var $ctrl = this;
                return $uibModal.open({
                    animation: true
                    , ariaLabelledBy: 'modal-title'
                    , ariaDescribedBy: 'modal-body'
                    , templateUrl: 'template/widget/file/fileSelect.html'
                    , controller: 'ShWidgetFileSelectCtrl'
                    , controllerAs: '$ctrl'
                    , size: null
                    , appendTo: undefined
                    , resolve: {
                        shPost: function () {
                            return shPost;
                        }
                    }
                });
            }
		} ]);