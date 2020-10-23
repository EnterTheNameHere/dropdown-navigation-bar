/* global atom */

/**
 * Defines Behavior contract implementors must implement.
 * @interface
 */
export class Behavior {
    /**
     * **Required** Releases resources held by this object.
     */
    dispose() {}
    /**
     * **Required** Behavior is told it can start performing it's behavior.
     * If object has been disposed of, this method must have no effect.
     */
    activateBehavior() {}
    /**
     * **Required** Behavior is told it must stop performing it's behavior.
     * If object has been disposed of, this method must have no effect.
     */
    deactivateBehavior() {}
    /**
     * **Required** Returns Behavior's settings schema.
     *
     * @return {BehaviorSettings} Schema of Behavior's settings.
     */
    settings() {}
    /**
     * *Optional* Called when Behavior's settings are changed. Use it when you need to perform update when setting is changed.
     * If object has been disposed of, this method must have no effect.
     */
    settingsChanged() {}
    /**
     * **Required** Checks if Behavior is disposed of.
     *
     * @return {Boolean} True when Behavior have been disposed of, false otherwise.
     */
    isDisposed() {}
    /**
     * **Required** Checks if Behavior is active, meaning it performs its function.
     *
     * @return {boolean} True when Behavior is active, false otherwise.
     */
    isActive() {}
    
    /**
     * *Not part of contract* Checks whether `behavior` adheres to required Behavior contract. Returns *true* if it does and *false* otherwise.
     * @param  {Behavior} behavior object instance to check
     * @return {boolean} true or false
     */
    static checkInstanceIsBehavior( behavior ) {
        if( typeof behavior.settings !== 'function' ) {
            atom.notifications.addError( 'behavior must implement settings function!' );
            //throw new Error('behavior must implement settings function!');
            
            return false;
        }
        
        const settings = behavior.settings();
        if( !Object.prototype.hasOwnProperty.call( settings, 'name' ) ) {
            atom.notifications.addError( 'behavior\'s settings object doesn\'t define behavior\'s "name"! Define "name" in settings object.' );
            //throw new Error('behavior\'s settings object doesn\'t define behavior\'s "name"! Define behavior.name in settings object.');
            
            return false;
        }
        
        const behaviorName = settings.name;
        if( typeof behaviorName !== 'string' ) {
            atom.notifications.addError( 'behavior\'s settings.name must be string!' );
            //throw new Error('behavior\'s settings.name must be string!');
            
            return false;
        }
        if( behaviorName.length === 0 ) {
            atom.notifications.addError( 'behavior\'s settings.name must not be empty!' );
            //throw new Error('behavior\'s settings.name must not be empty!');
            
            return false;
        }
        
        
        if( typeof behavior.activateBehavior !== 'function' ) {
            atom.notifications.addError( `${behaviorName} behavior doesn't implement activateBehavior function!` );
            //throw new Error(`${behaviorName} behavior doesn't implement activateBehavior function!`);
            
            return false;
        }
        
        if( typeof behavior.deactivateBehavior !== 'function' ) {
            atom.notifications.addError( `${behaviorName} behavior doesn't implement deactivateBehavior function!` );
            //throw new Error(`${behaviorName} behavior doesn't implement deactivateBehavior function!`);
            
            return false;
        }
        
        if( typeof behavior.isActive !== 'function' ) {
            atom.notifications.addError( `${behaviorName} behavior doesn't implement isActive function!` );
            //throw new Error(`${behaviorName} behavior doesn't implement isActive function!`);
            
            return false;
        }
        
        if( typeof behavior.isDisposed !== 'function' ) {
            atom.notifications.addError( `${behaviorName} behavior doesn't implement isDisposed function!` );
            //throw new Error(`${behaviorName} behavior doesn't implement isDisposed function!`);
            
            return false;
        }
        
        return true;
    }
}
