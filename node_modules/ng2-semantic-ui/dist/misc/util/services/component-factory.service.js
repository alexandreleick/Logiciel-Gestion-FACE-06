var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ReflectiveInjector } from "@angular/core";
var SuiComponentFactory = (function () {
    function SuiComponentFactory(_applicationRef, _componentFactoryResolver, _injector) {
        this._applicationRef = _applicationRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    SuiComponentFactory.prototype.createComponent = function (type, providers) {
        if (providers === void 0) { providers = []; }
        // Resolve a factory for creating components of type `type`.
        var factory = this._componentFactoryResolver.resolveComponentFactory(type);
        // Resolve and create an injector with the specified providers.
        var injector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
        // Create a component using the previously resolved factory & injector.
        var componentRef = factory.create(injector);
        return componentRef;
    };
    SuiComponentFactory.prototype.createView = function (viewContainer, template, context) {
        viewContainer.createEmbeddedView(template, context);
    };
    // Inserts the component into the specified view container.
    SuiComponentFactory.prototype.attachToView = function (componentRef, viewContainer) {
        viewContainer.insert(componentRef.hostView, 0);
    };
    // Inserts the component in the root application node.
    SuiComponentFactory.prototype.attachToApplication = function (componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    };
    // Detaches the component from the root application node.
    SuiComponentFactory.prototype.detachFromApplication = function (componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    };
    // Moves the component to the specified DOM element.
    SuiComponentFactory.prototype.moveToElement = function (componentRef, element) {
        element.appendChild(componentRef.location.nativeElement);
    };
    // Moves the component to the document body.
    SuiComponentFactory.prototype.moveToDocumentBody = function (componentRef) {
        this.moveToElement(componentRef, document.querySelector("body"));
    };
    SuiComponentFactory.prototype.detachFromDocument = function (componentRef) {
        var element = componentRef.location.nativeElement;
        // We can't use `element.remove()` due to lack of IE11 support.
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };
    return SuiComponentFactory;
}());
SuiComponentFactory = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApplicationRef,
        ComponentFactoryResolver,
        Injector])
], SuiComponentFactory);
export { SuiComponentFactory };
//# sourceMappingURL=component-factory.service.js.map