<!-- flash message -->
<flash-message></flash-message>

<!-- main header -->
<div class="row">
    <div class="col-lg-12">
        <h3 class="page-header">Galerie</h3>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">

        <div class="panel panel-default">

            <!-- heading -->
            <div class="panel-heading panel-heading-admin">
                Neue Galerie erstellen
            </div>

            <div class="panel-body">

                <!-- name -->
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" placeholder="Name" class="form-control" ng-model="vm.gallery.title"/>
                    </div>
                </div>

                <!-- date -->
                <div class="form-group">
                    <div class="input-group">
                        <input type="date" placeholder="Name" class="form-control" ng-model="vm.gallery.date"/>
                    </div>
                </div>

                <!-- Visible -->
                <div class="form-group">
                    <label for="visible">Veröffentlicht</label>
                    <div class="radio">
                        <label>
                            <input ng-model="vm.gallery.visible" checked="checked" type="radio" value="1">
                            Ja
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input ng-model="vm.gallery.visible" type="radio" value="0">
                            Nein
                        </label>
                    </div>
                </div>

                <!-- image -->
                <div class="form-group">
                    <div class="input-group">
                        <div class="uploader">
                            <button onclick="document.getElementById('single-uploader').click()" class="btn btn-upload">
                                Titelbild hochladen
                                <i class="material-icons upload-icon">cloud_upload</i>
                            </button>
                            <input type="file" fileread="vm.gallery.file" id="single-uploader">
                        </div>
                    </div>
                </div>

                <!-- preview image -->
                <div class="image-container" ng-show="vm.gallery.file">
                    <div class="img-btn-container animated bounceInDown">
                        <div class="a-image">
                            <img ng-src="@{{ vm.gallery.file.isImage && vm.gallery.file.url || null }}" ng-show="vm.gallery.file.isImage">
                            <div class="not-image" ng-show="!vm.gallery.file.isImage">
                                <p><i class="material-icons">warning</i></p>
                                <p>Die Datei ist keine Bild</p>
                            </div>
                        </div>
                        <button class="btn btn-dlt-img" ng-click="vm.hideImage()">Löschen</button>
                    </div>
                </div>

                <!-- multiple image -->
                <div class="form-group">
                    <div class="input-group">
                        <div class="uploader">
                            <button onclick="document.getElementById('multiple-uploader').click()" class="btn btn-upload">
                                Bilder hochladen
                                <i class="material-icons upload-icon">cloud_upload</i>
                            </button>
                            <input type="file" fileread-multiple="vm.gallery.files" id="multiple-uploader" multiple>
                        </div>
                    </div>
                </div>

                <!-- preview multiple images -->
                <div class="image-container" ng-show="vm.gallery.files">
                    <div class="img-btn-container animated bounceInDown" ng-repeat="file in vm.gallery.files">
                        <div class="a-image">
                            <img ng-src="@{{ file.isImage && file.url || null }}" ng-show="file.isImage">
                            <div class="not-image" ng-show="!file.isImage">
                                <p><i class="material-icons">warning</i></p>
                                <p>Die Datei ist keine Bild</p>
                            </div>
                        </div>
                        <button class="btn btn-dlt-img" ng-click="vm.hideImage(file)">Löschen</button>
                    </div>
                </div>

                <!-- errors -->
                <div class="alert alert-danger" role="alert" ng-if="vm.errors">
                    <ul ng-repeat="error in vm.errors">
                        <li ng-bind="error"></li>
                    </ul>
                </div>

                <!-- Submit -->
                <div class="form_submit">
                    <img ng-show="vm.loading" src='/admin/images/main/preloader.gif' alt='preloader gif'>
                    <button ng-show="!vm.loading"  ng-click="vm.create()" class="btn btn-submit">Erstellen</button>
                </div>

            </div> <!-- / panel body -->
        </div>
    </div>
</div>
